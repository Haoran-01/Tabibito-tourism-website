import random
import string
import requests
from flask import Blueprint, request, render_template, jsonify, g, session, current_app
from config import DevelopmentConfig
from forms import LoginFrom, RegisterForm, EmailCaptchaModel, ForgetFormPassword
from flask_login import login_user, logout_user, login_required
from models import User, Product, UserProfile, Order, Language, UserNotice, MessageStatus
from exts import db, mail
from flask_mail import Message
from datetime import datetime
from werkzeug.security import generate_password_hash
from flask_login import current_user

import flask
import google_auth_oauthlib.flow

bp = Blueprint("User", __name__, url_prefix="/user")


# 用户登出
@bp.route("/logout", methods=['GET'])
@login_required
def logout():
    logout_user()
    return jsonify(code=200)


# 注册功能
@bp.route("/register_form", methods=['POST', 'GET'])
def register_check():
    data = request.get_json(silent=True)
    user_email = data["email"]
    user_first_name = data["first"]
    user_last_name = data["last"]
    user_password = data["password"]
    user_password_confirm = data["confirm"]
    captcha = data["code"]
    register_form = RegisterForm(user_email=user_email, user_first_name=user_first_name, user_last_name=user_last_name,
                                 user_password=user_password, captcha=captcha)
    if register_form.validate():
        # 密码md5加密
        hash_password = generate_password_hash(register_form.user_password.data)
        # 构建user模型
        user = User()
        user.user_email = user_email
        user.user_first_name = user_first_name
        user.user_last_name = user_last_name
        user.user_password = hash_password
        db.session.add(user)
        db.session.commit()

        user_profile = UserProfile(user_id=user.user_id)
        db.session.add(user_profile)
        db.session.commit()
        return jsonify({"code": 200, "message": "Sign up successfully!"})
    else:
        if register_form.errors.get("user_email"):
            return jsonify({"code": 400, "message": "invalidSignUpEmail"})
        elif register_form.errors.get("captcha"):
            return jsonify({"code": 400, "message": "invalidSignUpCaptcha"})
        elif register_form.errors.get("user_first_name"):
            return jsonify({"code": 400, "message": "invalidSignUpUserName"})
        elif register_form.errors.get("user_last_name"):
            return jsonify({"code": 400, "message": "invalidSignUpUserLastName"})
        else:
            return jsonify({"code": 400, "message": "invalidSignUpPassword"})


# 登录功能
@bp.route("/login_form", methods=['POST', 'GET'])
def login_check():
    # 读取json值
    data = request.get_json(silent=True)
    user_email = data["email"]
    user_password = data["password"]
    login_form = LoginFrom(user_email=user_email, user_password=user_password)

    if login_form.validate():
        user = User.query.filter_by(user_email=user_email).first()
        login_user(user)
        session_dict = dict(flask.session)
        current_app.logger.info(f"Session: {session_dict}")
        current_app.logger.info("User {} logged in".format(user.user_id), extra={
            "user_id": user.user_id,
            "user_name": user.profile.job.name,
            "session": flask.session
        })
        return jsonify(code=200, job=user.profile.job.name)
    else:
        if login_form.errors.get("user_email"):
            return jsonify({"code": 400, "message": "email"})
        elif login_form.errors.get("user_password"):
            return jsonify({"code": 400, "message": "password"})


# 邮件发送功能
@bp.route("/captcha", methods=['POST', 'GET'])
def my_mail():
    data = request.get_json(silent=True)
    email = data["email"]
    if email:
        letters = string.ascii_letters + string.digits
        captcha = "".join(random.sample(letters, 6))
        message = Message(
            subject="Tabibito verification",
            recipients=[email],
            html=render_template("email.html", email_captcha=captcha, user_email=email)
        )
        mail.send(message)
        captcha_model = EmailCaptchaModel.query.filter_by(email=email).first()
        if captcha_model:
            captcha_model.captcha = captcha
            captcha_model.create_time = datetime.now()
            db.session.commit()
        else:
            captcha_model = EmailCaptchaModel(email=email, captcha=captcha)
            db.session.add(captcha_model)
            db.session.commit()
        # code:200,成功的，正常的请求
        return {'code': 200}
    else:
        # code:400,客户端错误
        return {"code": 400, "message": "email first！"}


# 忘记密码功能-邮箱验证
@bp.route("/forget_form_email", methods=['POST', 'GET'])
def email_check():
    data = request.get_json(silent=True)
    email = data["email"]
    captcha = data["verifyCode"]
    email_model = EmailCaptchaModel.query.filter_by(email=email).first()
    captcha_model = EmailCaptchaModel.query.filter_by(email=email).first()

    if email_model:
        if captcha_model.captcha == captcha:
            setattr(g, 'forget_email', email_model.email)
            session['forget_email'] = email_model.email
            return {"code": 200}
        else:
            return {"code": 400, "message": "captcha"}
    else:
        return {"code": 400, "message": "email"}


# 忘记密码功能-密码更改
@bp.route("/reset_password", methods=['POST', 'GET'])
def password_check():
    email = g.forget_email
    data = request.get_json(silent=True)
    user_password = data["password"]
    confirm = data["confirm"]
    password_form = ForgetFormPassword(user_password=user_password, confirm=confirm)
    if password_form.validate():
        new_password = user_password
        user_model = User.query.filter_by(user_email=email).first()
        user_model.user_password = generate_password_hash(new_password)
        db.session.commit()
        session['forget_email'] = None
        return {"code": 200}
    else:
        return {"code": 400}


@bp.route("/test_order", methods=["GET", "POST"])
def test_order():
    product = Product.query.filter_by(id=1).first()
    return jsonify(code=200)


@bp.route("/login_status", methods=["GET"])
def get_login_user():
    session_dict = dict(flask.session)
    current_app.logger.info(f"Session: {session_dict}")
    if current_user:
        # current_app.logger.info("User {} has logged in".format(current_user.user_id), extra={
        #     "user_id": current_user.user_id,
        #     "session": flask.session
        # })
        if hasattr(current_user, 'user_id'):
            return jsonify(id=current_user.user_id, job=current_user.profile.job.name,
                           name=current_user.user_first_name + " " + current_user.user_last_name)
        else:
            return jsonify(id=None, job=None, name=None)
    else:
        return jsonify(id=None, job=None, name=None)


@bp.route("/get_all_orders", methods=['POST'])
def get_user_orders():
    data = request.get_json(silent=True)
    user_id = data["user_id"]
    all_orders = db.session.query(Order).filter(user_id=user_id).all()
    result = []
    if len(all_orders != 0):
        for order in all_orders:
            result.append(order.id)
        return jsonify(code=200, all_orders=result)
    else:
        return jsonify(code=201, message="No orders for this user")


# 第三方登录
API_SERVICE_NAME = 'people'
API_VERSION = 'v1'
SCOPES = ['openid',
          'https://www.googleapis.com/auth/userinfo.email',
          'https://www.googleapis.com/auth/userinfo.profile',
          'https://www.googleapis.com/auth/cloud-platform.read-only']
CLIENT_SECRETS_FILE = "client_secret.json"


@bp.route('/authorize')
def authorize():
    # Create flow instance to manage the OAuth 2.0 Authorization Grant Flow steps.
    flow = google_auth_oauthlib.flow.Flow.from_client_secrets_file(CLIENT_SECRETS_FILE, scopes=SCOPES)

    # The URI created here must exactly match one of the authorized redirect URIs
    # for the OAuth 2.0 client, which you configured in the API Console. If this
    # value doesn't match an authorized URI, you will get a 'redirect_uri_mismatch'
    # error.
    flow.redirect_uri = flask.url_for('oauth2callback', _external=True)
    authorization_url, state = flow.authorization_url(
        # Enable offline access so that you can refresh an access token without
        # re-prompting the user for permission. Recommended for web server apps.
        access_type='offline',
        # Enable incremental authorization. Recommended as a best practice.
        include_granted_scopes='true')

    # Store the state so the callback can verify the auth server response.
    flask.session['state'] = state

    return flask.redirect(authorization_url)


@bp.route('/oauth2callback')
def oauth2callback():
    # Specify the state when creating the flow in the callback so that it can
    # verified in the authorization server response.
    state = flask.session['state']

    flow = google_auth_oauthlib.flow.Flow.from_client_secrets_file(CLIENT_SECRETS_FILE, scopes=SCOPES, state=state)
    flow.redirect_uri = flask.url_for('oauth2callback', _external=True)

    # Use the authorization server's response to fetch the OAuth 2.0 tokens.
    authorization_response = flask.request.url
    flow.fetch_token(authorization_response=authorization_response, verify=False)

    # Store credentials in the session.
    # ACTION ITEM: In a production app, you likely want to save these
    #              credentials in a persistent database instead.
    credentials = flow.credentials
    flask.session['credentials'] = credentials_to_dict(credentials)
    return flask.redirect("http://127.0.0.1:5000/")


def credentials_to_dict(credentials):
    return {
        'token': credentials.token,
        'refresh_token': credentials.refresh_token,
        'token_uri': credentials.token_uri,
        'client_id': credentials.client_id,
        'client_secret': credentials.client_secret,
        'scopes': credentials.scopes
    }


@bp.route("/get_language", methods=['GET', 'POST'])
def get_language():
    if current_user is not None:
        if hasattr(current_user, "user_id"):
            print(current_user.profile.language.name)
            return jsonify(language=current_user.profile.language.name)
        else:
            return jsonify(message="Not login")
    else:
        return jsonify(message="Not login")


@bp.route("/set_language", methods=['GET', 'POST'])
@login_required
def set_language():
    if current_user is not None:
        language = Language(request.json.get("language"))
        profile = UserProfile.query.filter(UserProfile.user_id == current_user.user_id).first()
        if language:
            profile.language = language
            db.session.commit()
        else:
            return jsonify(message="no such language")
        return jsonify(code=200)
    else:
        return jsonify(message="Not login")


@bp.route("/getprofile", methods=['GET', 'POST'])
def getprofile():
    user_id = request.json.get("user_id")
    user = User.query.filter(User.user_id == user_id).first()
    return user.get_profile()


@bp.route("/get_notices", methods=['GET', 'POST'])
@login_required
def get_notices():
    status = request.json.get("status")
    user_id = current_user.user_id
    notices_list = UserNotice.query.filter(
        (UserNotice.user_id == user_id) & (UserNotice.status == MessageStatus(status))).all()
    notices = [message.serialize() for message in notices_list]
    return jsonify(notices=notices)


@bp.route("/check_notice", methods=['GET', 'POST'])
# @login_required
def check_notice():
    notice_id = request.json.get("id")
    status = request.json.get("new_status")
    notice = UserNotice.query.filter(UserNotice.id == notice_id).first()
    if notice:
        notice.status = MessageStatus(value=status)
        db.session.commit()
        return {}, 204
    else:
        return {}, 404


@bp.route("/dashboard/get_recent_trips", methods=['GET', 'POST'])
# @login_required
def recent_trips():
    print(2)
    user_id = 2
    user = User.query.filter_by(user_id=user_id).first()
    recent_orders = user.orders[:3]
    recentTrips = [order.serialize_trip() for order in recent_orders]

    # headers = {'x-apikey': DevelopmentConfig.FLIGHT_KEY}
    # url = DevelopmentConfig.FLIGHT_URL + "AA8111"
    # response = requests.get(url, headers=headers)
    #
    # if response.status_code == 200:
    #     data = response.json()
    #     print(data['flights'][0])
    #     # 处理返回的数据
    # else:
    #     print("false")


    api_key = DevelopmentConfig.WEATHER_KEY
    base_url = DevelopmentConfig.WEATHER_URL
    location = 'London'  # 将 trip.raw_loc 替换为具体的位置

    response = requests.get(f'{base_url}/forecast.json?key={api_key}&q={location}&days=1&aqi=no&alerts=no')
    if response.status_code == 200:
        data = response.json()
        print(data)
        # 处理返回的数据
    else:
        print("false")

    return jsonify(recentTrips = recentTrips)
{'flights':
     [{'ident': 'EIN550', 'ident_icao': 'EIN550', 'ident_iata': 'EI550', 'fa_flight_id': 'EIN550-1683959393-schedule-81p', 'operator': 'EIN', 'operator_icao': 'EIN', 'operator_iata': 'EI', 'flight_number': '550', 'registration': None, 'atc_ident': None, 'inbound_fa_flight_id': None, 'codeshares': ['AAL8111'], 'codeshares_iata': ['AA8111'], 'blocked': False, 'diverted': False, 'cancelled': False, 'position_only': False, 'origin': {'code': 'EIDW', 'code_icao': 'EIDW', 'code_iata': 'DUB', 'code_lid': None, 'timezone': 'Europe/Dublin', 'name': "Dublin Int'l", 'city': '都柏林 IE', 'airport_info_url': '/airports/EIDW'}, 'destination': {'code': 'LFLL', 'code_icao': 'LFLL', 'code_iata': 'LYS', 'code_lid': None, 'timezone': 'Europe/Paris', 'name': 'Lyon', 'city': '里昂 FR', 'airport_info_url': '/airports/LFLL'}, 'departure_delay': 0, 'arrival_delay': 0, 'filed_ete': 6600, 'foresight_predictions_available': False, 'scheduled_out': '2023-05-15T06:20:00Z', 'estimated_out': None, 'actual_out': None, 'scheduled_off': '2023-05-15T06:30:00Z', 'estimated_off': '2023-05-15T06:30:00Z', 'actual_off': None, 'scheduled_on': '2023-05-15T08:20:00Z', 'estimated_on': '2023-05-15T08:20:00Z', 'actual_on': None, 'scheduled_in': '2023-05-15T08:30:00Z', 'estimated_in': None, 'actual_in': None, 'progress_percent': 0, 'status': '已排班', 'aircraft_type': 'A320', 'route_distance': 735, 'filed_airspeed': 349, 'filed_altitude': None, 'route': None, 'baggage_claim': None, 'seats_cabin_business': 0, 'seats_cabin_coach': 174, 'seats_cabin_first': 0, 'gate_origin': None, 'gate_destination': None, 'terminal_origin': None, 'terminal_destination': None, 'type': 'Airline'}, {'ident': 'EIN550', 'ident_icao': 'EIN550', 'ident_iata': 'EI550', 'fa_flight_id': 'EIN550-1683873226-schedule-813p', 'operator': 'EIN', 'operator_icao': 'EIN', 'operator_iata': 'EI', 'flight_number': '550', 'registration': None, 'atc_ident': None, 'inbound_fa_flight_id': None, 'codeshares': ['AAL8111'], 'codeshares_iata': ['AA8111'], 'blocked': False, 'diverted': False, 'cancelled': False, 'position_only': False, 'origin': {'code': 'EIDW', 'code_icao': 'EIDW', 'code_iata': 'DUB', 'code_lid': None, 'timezone': 'Europe/Dublin', 'name': "Dublin Int'l", 'city': '都柏林 IE', 'airport_info_url': '/airports/EIDW'}, 'destination': {'code': 'LFLL', 'code_icao': 'LFLL', 'code_iata': 'LYS', 'code_lid': None, 'timezone': 'Europe/Paris', 'name': 'Lyon', 'city': '里昂 FR', 'airport_info_url': '/airports/LFLL'}, 'departure_delay': 0, 'arrival_delay': 0, 'filed_ete': 6600, 'foresight_predictions_available': False, 'scheduled_out': '2023-05-14T06:20:00Z', 'estimated_out': '2023-05-14T06:20:00Z', 'actual_out': None, 'scheduled_off': '2023-05-14T06:30:00Z', 'estimated_off': '2023-05-14T06:30:00Z', 'actual_off': None, 'scheduled_on': '2023-05-14T08:20:00Z', 'estimated_on': '2023-05-14T08:20:00Z', 'actual_on': None, 'scheduled_in': '2023-05-14T08:30:00Z', 'estimated_in': '2023-05-14T08:30:00Z', 'actual_in': None, 'progress_percent': 0, 'status': '已排班', 'aircraft_type': 'A320', 'route_distance': 735, 'filed_airspeed': 349, 'filed_altitude': None, 'route': None, 'baggage_claim': None, 'seats_cabin_business': 0, 'seats_cabin_coach': 174, 'seats_cabin_first': 0, 'gate_origin': None, 'gate_destination': None, 'terminal_origin': '2', 'terminal_destination': '1', 'type': 'Airline'}, {'ident': 'EIN550', 'ident_icao': 'EIN550', 'ident_iata': 'EI550', 'fa_flight_id': 'EIN550-1683786985-schedule-1205p', 'operator': 'EIN', 'operator_icao': 'EIN', 'operator_iata': 'EI', 'flight_number': '550', 'registration': 'EI-DVG', 'atc_ident': None, 'inbound_fa_flight_id': 'EIN739-1683755647-schedule-792p', 'codeshares': ['AAL8111'], 'codeshares_iata': ['AA8111'], 'blocked': False, 'diverted': False, 'cancelled': False, 'position_only': False, 'origin': {'code': 'EIDW', 'code_icao': 'EIDW', 'code_iata': 'DUB', 'code_lid': None, 'timezone': 'Europe/Dublin', 'name': "Dublin Int'l", 'city': '都柏林 IE', 'airport_info_url': '/airports/EIDW'}, 'destination': {'code': 'LFLL', 'code_icao': 'LFLL', 'code_iata': 'LYS', 'code_lid': None, 'timezone': 'Europe/Paris', 'name': 'Lyon', 'city': '里昂 FR', 'airport_info_url': '/airports/LFLL'}, 'departure_delay': 0, 'arrival_delay': 679, 'filed_ete': 6120, 'foresight_predictions_available': True, 'scheduled_out': '2023-05-13T06:35:00Z', 'estimated_out': '2023-05-13T06:35:00Z', 'actual_out': '2023-05-13T06:35:00Z', 'scheduled_off': '2023-05-13T06:45:00Z', 'estimated_off': '2023-05-13T07:13:47Z', 'actual_off': '2023-05-13T07:13:47Z', 'scheduled_on': '2023-05-13T08:27:00Z', 'estimated_on': '2023-05-13T08:56:19Z', 'actual_on': '2023-05-13T08:56:19Z', 'scheduled_in': '2023-05-13T08:45:00Z', 'estimated_in': '2023-05-13T09:10:00Z', 'actual_in': '2023-05-13T08:56:19Z', 'progress_percent': 100, 'status': '已到达 / 到达停机位', 'aircraft_type': 'A320', 'route_distance': 735, 'filed_airspeed': 349, 'filed_altitude': None, 'route': None, 'baggage_claim': None, 'seats_cabin_business': None, 'seats_cabin_coach': None, 'seats_cabin_first': None, 'gate_origin': '423', 'gate_destination': None, 'terminal_origin': '2', 'terminal_destination': '1', 'type': 'Airline'}, {'ident': 'EIN550', 'ident_icao': 'EIN550', 'ident_iata': 'EI550', 'fa_flight_id': 'EIN550-1683700692-schedule-2337p', 'operator': 'EIN', 'operator_icao': 'EIN', 'operator_iata': 'EI', 'flight_number': '550', 'registration': 'EI-DVH', 'atc_ident': None, 'inbound_fa_flight_id': 'EIN589-1683669637-schedule-2060p', 'codeshares': ['AAL8111'], 'codeshares_iata': ['AA8111'], 'blocked': False, 'diverted': False, 'cancelled': False, 'position_only': False, 'origin': {'code': 'EIDW', 'code_icao': 'EIDW', 'code_iata': 'DUB', 'code_lid': None, 'timezone': 'Europe/Dublin', 'name': "Dublin Int'l", 'city': '都柏林 IE', 'airport_info_url': '/airports/EIDW'}, 'destination': {'code': 'LFLL', 'code_icao': 'LFLL', 'code_iata': 'LYS', 'code_lid': None, 'timezone': 'Europe/Paris', 'name': 'Lyon', 'city': '里昂 FR', 'airport_info_url': '/airports/LFLL'}, 'departure_delay': 0, 'arrival_delay': 180, 'filed_ete': 6120, 'foresight_predictions_available': True, 'scheduled_out': '2023-05-12T06:20:00Z', 'estimated_out': '2023-05-12T06:20:00Z', 'actual_out': '2023-05-12T06:20:00Z', 'scheduled_off': '2023-05-12T06:30:00Z', 'estimated_off': '2023-05-12T06:43:36Z', 'actual_off': '2023-05-12T06:43:36Z', 'scheduled_on': '2023-05-12T08:12:00Z', 'estimated_on': '2023-05-12T08:28:14Z', 'actual_on': '2023-05-12T08:28:14Z', 'scheduled_in': '2023-05-12T08:30:00Z', 'estimated_in': '2023-05-12T08:23:00Z', 'actual_in': '2023-05-12T08:33:00Z', 'progress_percent': 100, 'status': '已到达 / 到达停机位', 'aircraft_type': 'A320', 'route_distance': 735, 'filed_airspeed': 349, 'filed_altitude': None, 'route': None, 'baggage_claim': '104', 'seats_cabin_business': None, 'seats_cabin_coach': None, 'seats_cabin_first': None, 'gate_origin': '421', 'gate_destination': None, 'terminal_origin': '2', 'terminal_destination': '1', 'type': 'Airline'}, {'ident': 'EIN550', 'ident_icao': 'EIN550', 'ident_iata': 'EI550', 'fa_flight_id': 'EIN550-1683527065-schedule-241p', 'operator': 'EIN', 'operator_icao': 'EIN', 'operator_iata': 'EI', 'flight_number': '550', 'registration': 'EI-DVH', 'atc_ident': None, 'inbound_fa_flight_id': 'EIN737-1683486361-schedule-936p', 'codeshares': ['AAL8111'], 'codeshares_iata': ['AA8111'], 'blocked': False, 'diverted': False, 'cancelled': False, 'position_only': False, 'origin': {'code': 'EIDW', 'code_icao': 'EIDW', 'code_iata': 'DUB', 'code_lid': None, 'timezone': 'Europe/Dublin', 'name': "Dublin Int'l", 'city': '都柏林 IE', 'airport_info_url': '/airports/EIDW'}, 'destination': {'code': 'LFLL', 'code_icao': 'LFLL', 'code_iata': 'LYS', 'code_lid': None, 'timezone': 'Europe/Paris', 'name': 'Lyon', 'city': '里昂 FR', 'airport_info_url': '/airports/LFLL'}, 'departure_delay': 0, 'arrival_delay': 660, 'filed_ete': 7080, 'foresight_predictions_available': True, 'scheduled_out': '2023-05-10T06:20:00Z', 'estimated_out': '2023-05-10T06:20:00Z', 'actual_out': '2023-05-10T06:20:00Z', 'scheduled_off': '2023-05-10T06:30:00Z', 'estimated_off': '2023-05-10T06:51:50Z', 'actual_off': '2023-05-10T06:51:50Z', 'scheduled_on': '2023-05-10T08:28:00Z', 'estimated_on': '2023-05-10T08:35:34Z', 'actual_on': '2023-05-10T08:35:34Z', 'scheduled_in': '2023-05-10T08:30:00Z', 'estimated_in': '2023-05-10T08:34:00Z', 'actual_in': '2023-05-10T08:41:00Z', 'progress_percent': 100, 'status': '已到达 / 到达停机位', 'aircraft_type': 'A320', 'route_distance': 735, 'filed_airspeed': 349, 'filed_altitude': None, 'route': None, 'baggage_claim': '106', 'seats_cabin_business': None, 'seats_cabin_coach': None, 'seats_cabin_first': None, 'gate_origin': None, 'gate_destination': None, 'terminal_origin': '2', 'terminal_destination': '1', 'type': 'Airline'}, {'ident': 'EIN550', 'ident_icao': 'EIN550', 'ident_iata': 'EI550', 'fa_flight_id': 'EIN550-1683354511-schedule-1465p', 'operator': 'EIN', 'operator_icao': 'EIN', 'operator_iata': 'EI', 'flight_number': '550', 'registration': 'EI-GAL', 'atc_ident': None, 'inbound_fa_flight_id': 'EIN349-1683313790-schedule-252p', 'codeshares': ['AAL8111'], 'codeshares_iata': ['AA8111'], 'blocked': False, 'diverted': False, 'cancelled': False, 'position_only': False, 'origin': {'code': 'EIDW', 'code_icao': 'EIDW', 'code_iata': 'DUB', 'code_lid': None, 'timezone': 'Europe/Dublin', 'name': "Dublin Int'l", 'city': '都柏林 IE', 'airport_info_url': '/airports/EIDW'}, 'destination': {'code': 'LFLL', 'code_icao': 'LFLL', 'code_iata': 'LYS', 'code_lid': None, 'timezone': 'Europe/Paris', 'name': 'Lyon', 'city': '里昂 FR', 'airport_info_url': '/airports/LFLL'}, 'departure_delay': 360, 'arrival_delay': 480, 'filed_ete': 5700, 'foresight_predictions_available': True, 'scheduled_out': '2023-05-08T06:20:00Z', 'estimated_out': '2023-05-08T06:20:00Z', 'actual_out': '2023-05-08T06:26:00Z', 'scheduled_off': '2023-05-08T06:30:00Z', 'estimated_off': '2023-05-08T06:51:23Z', 'actual_off': '2023-05-08T06:51:23Z', 'scheduled_on': '2023-05-08T08:05:00Z', 'estimated_on': '2023-05-08T08:22:00Z', 'actual_on': '2023-05-08T08:32:11Z', 'scheduled_in': '2023-05-08T08:30:00Z', 'estimated_in': '2023-05-08T08:41:51Z', 'actual_in': '2023-05-08T08:38:00Z', 'progress_percent': 100, 'status': '已到达 / 到达停机位', 'aircraft_type': 'A320', 'route_distance': 735, 'filed_airspeed': 349, 'filed_altitude': None, 'route': None, 'baggage_claim': '101', 'seats_cabin_business': None, 'seats_cabin_coach': None, 'seats_cabin_first': None, 'gate_origin': None, 'gate_destination': None, 'terminal_origin': '2', 'terminal_destination': '1', 'type': 'Airline'}, {'ident': 'EIN550', 'ident_icao': 'EIN550', 'ident_iata': 'EI550', 'fa_flight_id': 'EIN550-1683268223-schedule-145p', 'operator': 'EIN', 'operator_icao': 'EIN', 'operator_iata': 'EI', 'flight_number': '550', 'registration': 'EI-DVH', 'atc_ident': None, 'inbound_fa_flight_id': 'EIN765-1683229476-schedule-256p', 'codeshares': ['AAL8111'], 'codeshares_iata': ['AA8111'], 'blocked': False, 'diverted': False, 'cancelled': False, 'position_only': False, 'origin': {'code': 'EIDW', 'code_icao': 'EIDW', 'code_iata': 'DUB', 'code_lid': None, 'timezone': 'Europe/Dublin', 'name': "Dublin Int'l", 'city': '都柏林 IE', 'airport_info_url': '/airports/EIDW'}, 'destination': {'code': 'LFLL', 'code_icao': 'LFLL', 'code_iata': 'LYS', 'code_lid': None, 'timezone': 'Europe/Paris', 'name': 'Lyon', 'city': '里昂 FR', 'airport_info_url': '/airports/LFLL'}, 'departure_delay': 0, 'arrival_delay': -180, 'filed_ete': 5940, 'foresight_predictions_available': True, 'scheduled_out': '2023-05-07T06:20:00Z', 'estimated_out': '2023-05-07T06:20:00Z', 'actual_out': '2023-05-07T06:20:00Z', 'scheduled_off': '2023-05-07T06:30:00Z', 'estimated_off': '2023-05-07T06:52:25Z', 'actual_off': '2023-05-07T06:52:25Z', 'scheduled_on': '2023-05-07T08:09:00Z', 'estimated_on': '2023-05-07T08:27:00Z', 'actual_on': '2023-05-07T08:27:00Z', 'scheduled_in': '2023-05-07T08:30:00Z', 'estimated_in': '2023-05-07T08:40:00Z', 'actual_in': '2023-05-07T08:27:00Z', 'progress_percent': 100, 'status': '已到达 / 到达停机位', 'aircraft_type': 'A320', 'route_distance': 735, 'filed_airspeed': 349, 'filed_altitude': None, 'route': None, 'baggage_claim': None, 'seats_cabin_business': None, 'seats_cabin_coach': None, 'seats_cabin_first': None, 'gate_origin': '307', 'gate_destination': None, 'terminal_origin': '2', 'terminal_destination': '1', 'type': 'Airline'}, {'ident': 'EIN550', 'ident_icao': 'EIN550', 'ident_iata': 'EI550', 'fa_flight_id': 'EIN550-1683182957-schedule-132p', 'operator': 'EIN', 'operator_icao': 'EIN', 'operator_iata': 'EI', 'flight_number': '550', 'registration': 'EI-DVG', 'atc_ident': None, 'inbound_fa_flight_id': 'EIN685-1683127695-schedule-474p', 'codeshares': ['AAL8111'], 'codeshares_iata': ['AA8111'], 'blocked': False, 'diverted': False, 'cancelled': False, 'position_only': False, 'origin': {'code': 'EIDW', 'code_icao': 'EIDW', 'code_iata': 'DUB', 'code_lid': None, 'timezone': 'Europe/Dublin', 'name': "Dublin Int'l", 'city': '都柏林 IE', 'airport_info_url': '/airports/EIDW'}, 'destination': {'code': 'LFLL', 'code_icao': 'LFLL', 'code_iata': 'LYS', 'code_lid': None, 'timezone': 'Europe/Paris', 'name': 'Lyon', 'city': '里昂 FR', 'airport_info_url': '/airports/LFLL'}, 'departure_delay': 0, 'arrival_delay': 0, 'filed_ete': 6060, 'foresight_predictions_available': True, 'scheduled_out': '2023-05-06T06:35:00Z', 'estimated_out': '2023-05-06T06:35:00Z', 'actual_out': '2023-05-06T06:35:00Z', 'scheduled_off': '2023-05-06T06:45:00Z', 'estimated_off': '2023-05-06T06:56:15Z', 'actual_off': '2023-05-06T06:56:15Z', 'scheduled_on': '2023-05-06T08:26:00Z', 'estimated_on': '2023-05-06T08:40:43Z', 'actual_on': '2023-05-06T08:40:43Z', 'scheduled_in': '2023-05-06T08:45:00Z', 'estimated_in': '2023-05-06T08:50:43Z', 'actual_in': '2023-05-06T08:45:00Z', 'progress_percent': 100, 'status': '已到达 / 到达停机位', 'aircraft_type': 'A320', 'route_distance': 735, 'filed_airspeed': 349, 'filed_altitude': None, 'route': None, 'baggage_claim': '102', 'seats_cabin_business': None, 'seats_cabin_coach': None, 'seats_cabin_first': None, 'gate_origin': None, 'gate_destination': None, 'terminal_origin': '2', 'terminal_destination': '1', 'type': 'Airline'}, {'ident': 'EIN550', 'ident_icao': 'EIN550', 'ident_iata': 'EI550', 'fa_flight_id': 'EIN550-1683095783-schedule-1951p', 'operator': 'EIN', 'operator_icao': 'EIN', 'operator_iata': 'EI', 'flight_number': '550', 'registration': 'EI-DVH', 'atc_ident': None, 'inbound_fa_flight_id': 'EIN277-1683057053-schedule-200p', 'codeshares': ['AAL8111'], 'codeshares_iata': ['AA8111'], 'blocked': False, 'diverted': False, 'cancelled': False, 'position_only': False, 'origin': {'code': 'EIDW', 'code_icao': 'EIDW', 'code_iata': 'DUB', 'code_lid': None, 'timezone': 'Europe/Dublin', 'name': "Dublin Int'l", 'city': '都柏林 IE', 'airport_info_url': '/airports/EIDW'}, 'destination': {'code': 'LFLL', 'code_icao': 'LFLL', 'code_iata': 'LYS', 'code_lid': None, 'timezone': 'Europe/Paris', 'name': 'Lyon', 'city': '里昂 FR', 'airport_info_url': '/airports/LFLL'}, 'departure_delay': -60, 'arrival_delay': 180, 'filed_ete': 6060, 'foresight_predictions_available': True, 'scheduled_out': '2023-05-05T06:20:00Z', 'estimated_out': '2023-05-05T06:20:00Z', 'actual_out': '2023-05-05T06:19:00Z', 'scheduled_off': '2023-05-05T06:30:00Z', 'estimated_off': '2023-05-05T06:54:11Z', 'actual_off': '2023-05-05T06:54:11Z', 'scheduled_on': '2023-05-05T08:11:00Z', 'estimated_on': '2023-05-05T08:33:00Z', 'actual_on': '2023-05-05T08:33:00Z', 'scheduled_in': '2023-05-05T08:30:00Z', 'estimated_in': '2023-05-05T08:43:00Z', 'actual_in': '2023-05-05T08:33:00Z', 'progress_percent': 100, 'status': '已到达 / 到达停机位', 'aircraft_type': 'A320', 'route_distance': 735, 'filed_airspeed': 349, 'filed_altitude': None, 'route': None, 'baggage_claim': '106', 'seats_cabin_business': None, 'seats_cabin_coach': None, 'seats_cabin_first': None, 'gate_origin': None, 'gate_destination': None, 'terminal_origin': '2', 'terminal_destination': '1', 'type': 'Airline'}, {'ident': 'EIN550', 'ident_icao': 'EIN550', 'ident_iata': 'EI550', 'fa_flight_id': 'EIN550-1682922228-schedule-3541', 'operator': 'EIN', 'operator_icao': 'EIN', 'operator_iata': 'EI', 'flight_number': '550', 'registration': 'EI-DVG', 'atc_ident': None, 'inbound_fa_flight_id': 'EIN407-1682879501-schedule-1218', 'codeshares': ['AAL8111'], 'codeshares_iata': ['AA8111'], 'blocked': False, 'diverted': False, 'cancelled': False, 'position_only': False, 'origin': {'code': 'EIDW', 'code_icao': 'EIDW', 'code_iata': 'DUB', 'code_lid': None, 'timezone': 'Europe/Dublin', 'name': "Dublin Int'l", 'city': '都柏林 IE', 'airport_info_url': '/airports/EIDW'}, 'destination': {'code': 'LFLL', 'code_icao': 'LFLL', 'code_iata': 'LYS', 'code_lid': None, 'timezone': 'Europe/Paris', 'name': 'Lyon', 'city': '里昂 FR', 'airport_info_url': '/airports/LFLL'}, 'departure_delay': 0, 'arrival_delay': 600, 'filed_ete': 5820, 'foresight_predictions_available': True, 'scheduled_out': '2023-05-03T06:20:00Z', 'estimated_out': '2023-05-03T06:20:00Z', 'actual_out': '2023-05-03T06:20:00Z', 'scheduled_off': '2023-05-03T06:30:00Z', 'estimated_off': '2023-05-03T06:54:25Z', 'actual_off': '2023-05-03T06:54:25Z', 'scheduled_on': '2023-05-03T08:07:00Z', 'estimated_on': '2023-05-03T08:34:14Z', 'actual_on': '2023-05-03T08:34:14Z', 'scheduled_in': '2023-05-03T08:30:00Z', 'estimated_in': '2023-05-03T08:33:00Z', 'actual_in': '2023-05-03T08:40:00Z', 'progress_percent': 100, 'status': '已到达 / 到达停机位', 'aircraft_type': 'A320', 'route_distance': 735, 'filed_airspeed': 349, 'filed_altitude': None, 'route': None, 'baggage_claim': '102', 'seats_cabin_business': None, 'seats_cabin_coach': None, 'seats_cabin_first': None, 'gate_origin': None, 'gate_destination': None, 'terminal_origin': '2', 'terminal_destination': '1', 'type': 'Airline'}], 'links': None, 'num_pages': 1}
