import random
import string


from flask import Blueprint, request, render_template, jsonify, g, session
from forms import LoginFrom, RegisterForm, EmailCaptchaModel, ForgetFormPassword
from flask_login import login_user, logout_user, login_required
from models import User
from exts import db, mail
from flask_mail import Message
from datetime import datetime
from werkzeug.security import generate_password_hash

bp = Blueprint("User", __name__, url_prefix="/user")


# 用户登出
@bp.route("/logout",methods=['GET'])
@login_required
def logout():
    logout_user()
    return None


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
    print(user_email, user_first_name, user_last_name, user_password, user_password_confirm, captcha)
    register_form = RegisterForm(user_email=user_email, user_first_name=user_first_name, user_last_name=user_last_name,
                                 user_password=user_password, captcha=captcha)
    if register_form.validate():
        print("成功")
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
        return jsonify({"code": 200, "message": "Sign up successfully!"})
    else:
        if register_form.errors.get("user_email"):
            print(1)
            return jsonify({"code":400,"message": "invalidSignUpEmail"})
        elif register_form.errors.get("captcha"):
            print(2)
            return jsonify({"code":400, "message": "invalidSignUpCaptcha"})

        elif register_form.errors.get("user_first_name"):
            print(3)
            return jsonify({"code":400,"message":"invalidSignUpUserName"})
        elif register_form.errors.get("user_last_name"):
            print(4)
            return jsonify({"code":400,"message":"invalidSignUpUserLastName"})
        else:
            print(5)
            return jsonify({"code":400,"message":"invalidSignUpPassword"})



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
        print("chenggong")
        return jsonify({"code":200})
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
            html=render_template("email.html", email_captcha=captcha)
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
    print(email, captcha)
    if email_model:
        if captcha_model.captcha == captcha:

            setattr(g, 'forget_email', email_model.email)
            session['forget_email'] = email_model.email
            print(session.get("forget_email"))
            return {"code": 200}
        else:
            return {"code": 400, "message": "captcha"}
    else:
        return {"code": 400, "message": "email"}


# 忘记密码功能-密码更改
@bp.route("/reset_password", methods=['POST', 'GET'])
def password_check():

    print(session.get("forget_email"))
    email = g.forget_email
    print(email)
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
