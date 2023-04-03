from flask import Blueprint, request, render_template, jsonify, g, session
from forms import LoginFrom, RegisterForm, EmailCaptchaModel, ForgetFormPassword
from flask_login import login_user, logout_user, login_required
from models import User, Product, UserProfile
from exts import db, mail
from flask_mail import Message
from datetime import datetime
from werkzeug.security import generate_password_hash

bp = Blueprint("Product", __name__, url_prefix="/product")


@bp.route("/add_trip", methods=['POST'])
def add_trip():
    data = request.get_json(silent=True)
    time = data["time"]
    loc_detail = data["detail"]
    activity = data["activity"]
    return



