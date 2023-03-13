import os
from flask import jsonify
from wtforms import ValidationError
from flask_login import LoginManager
from flask_migrate import Migrate
from models import User

from flask import Flask
from config import config
from exts import mail, db
from webdir.blueprints import user_bp
from flask_cors import CORS

def create_app(config_name):
    app = Flask(__name__, template_folder="templates", static_folder="static", static_url_path="")
    app.config.from_object(config[config_name])
    config[config_name].init_app(app)
    CORS(app, resources=r'/*')
    return app

app = create_app(os.getenv('FLASK_CONFIG') or 'default')
db.init_app(app)
mail.init_app(app)
migrate = Migrate(app, db)
app.register_blueprint(user_bp)

app.secret_key = os.getenv("SECRET_KEY", "mou107b6vsfxor82bbc4bzf4mcu7")

login_manager = LoginManager()
login_manager.login_message_category = 'info'
login_manager.login_message = 'Access denied'
login_manager.init_app(app)

@login_manager.user_loader
def load_user(user_email):
    if User.query.filter_by(user_email=user_email).first() is not None:
        curr_user = User()
        curr_user.user_email = user_email
        return curr_user


@app.errorhandler(ValidationError)
def validation_error(e):
    return jsonify({"code": 400, "message": e.args})