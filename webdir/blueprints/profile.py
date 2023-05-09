import os

from config import Config
from flask_login import current_user
from werkzeug.utils import secure_filename
from flask import Blueprint, jsonify, request

from exts import db
from models import User

bp = Blueprint("Profile", __name__, url_prefix="/profile")


@bp.route("/info", methods=['GET'])
def get_user_info():
    user_id = current_user.user_id
    user_profile = User.query.filter_by(user_id=user_id).first().profile
    return jsonify(user_profile.serialize_profile()), 200


@bp.route("/uploadavatar", methods=['POST'])
def upload_avatar():
    file = request.files['file']
    filename = secure_filename(file.filename)
    file.save(os.path.join(Config.UPLOAD_FOLDER, filename))
    return os.path.join(Config.UPLOAD_FOLDER, filename)


@bp.route("/update_info", methods=['POST'])
def update_info():
    data = request.get_json(silent=True)
    user_id = current_user.user_id
    user_profile = User.query.filter_by(user_id=user_id).first().profile
    user_profile.gender = data["gender"]
    user_profile.user_name = data["u_name"]
    user_profile.user.user_first_name = data["f_name"]
    user_profile.user.user_last_name = data["l_name"]
    user_profile.phone_number = data["phone"]
    user_profile.birthday = data["birthday"]
    user_profile.description = data["about"]
    db.session.commit()
    return jsonify(message="success"), 200