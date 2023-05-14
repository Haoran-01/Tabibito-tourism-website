import random
import string
import requests
from flask import Blueprint, request, render_template, jsonify, g, session, current_app

import util
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

bp = Blueprint("Third", __name__, url_prefix="/third")


@bp.route("/weather", methods=['GET', 'POST'])
def weather():
    location = request.json.get("location")
    weather_data = util.get_weather_data(location)
    if weather_data is not None:
        result = {}
        return jsonify(), 200
    else:
        return jsonify(error="No weather Data"), 304


@bp.route("/flight", methods=['GET', 'POST'])
def flight():
    flight_number = request.json.get("flight_number")
    flight_data = util.get_weather_data(flight_number)
    if flight_data is not None:
        return jsonify(), 200
    else:
        return jsonify(error="No flight Data"), 404
