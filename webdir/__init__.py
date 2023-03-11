import os
from flask import Flask, jsonify
from wtforms import ValidationError
from flask_login import LoginManager
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from flask_mail import Mail
#from models import
#from blueprints

from flask import Flask
from config import config
from exts import mail, db


def create_app(config_name):
    app = Flask(__name__, template_folder="templates", static_folder="static", static_url_path="")
    app.config.from_object(config[config_name])
    config[config_name].init_app(app)

    return app

app = create_app(os.getenv('FLASK_CONFIG') or 'default')
db.init_app(app)
mail.init_app(app)
migrate = Migrate(app, db)

app.secret_key = os.getenv("SECRET_KEY", "mou107b6vsfxor82bbc4bzf4mcu7")

