import os
from flask import jsonify, make_response
from wtforms import ValidationError
from flask_login import LoginManager
from flask_migrate import Migrate
from models import User

from flask import Flask, g, session
from config import config
from exts import mail, db
from webdir.blueprints import user_bp, product_bp, search_bp, recommend_bp, homepage_bp, order_bp, staff_bp, comment_bp, \
    profile_bp
from flask_cors import CORS


def create_app(config_name):
    app = Flask(__name__, template_folder="../front_end/tabibito_frontend/dist",
                static_folder="../front_end/tabibito_frontend/dist", static_url_path="")
    app.config.from_object(config[config_name])
    config[config_name].init_app(app)

    CORS(app, supports_credentials=True)
    return app


# nltk.download('stopwords')
# nltk.download('wordnet')
app = create_app(os.getenv('FLASK_CONFIG') or 'default')
db.init_app(app)
mail.init_app(app)
migrate = Migrate(app, db)

# blueprint register
app.register_blueprint(user_bp)
app.register_blueprint(search_bp)
app.register_blueprint(product_bp)
app.register_blueprint(recommend_bp)
app.register_blueprint(homepage_bp)
app.register_blueprint(staff_bp)
app.register_blueprint(order_bp)
app.register_blueprint(comment_bp)
app.register_blueprint(profile_bp)

app.secret_key = os.getenv("SECRET_KEY", "mou107b6vsfxor82bbc4bzf4mcu7")

login_manager = LoginManager()
login_manager.login_message_category = 'info'
login_manager.login_message = 'Access denied'
login_manager.init_app(app)

import logging
from logging.handlers import RotatingFileHandler

# 设置日志记录器
log_formatter = logging.Formatter('%(asctime)s %(levelname)s: %(message)s [in %(pathname)s:%(lineno)d]')
log_file = 'logfile.log'
log_handler = RotatingFileHandler(log_file, maxBytes=100000, backupCount=10)
log_handler.setLevel(logging.INFO)
log_handler.setFormatter(log_formatter)
app.logger.addHandler(log_handler)

# 将日志记录到控制台
console_handler = logging.StreamHandler()
console_handler.setLevel(logging.INFO)
console_handler.setFormatter(log_formatter)
app.logger.addHandler(console_handler)


@login_manager.user_loader
def load_user(user_id):
    user = User.query.filter_by(user_id=user_id).first()
    if user is not None:
        return user
    else:
        return User()


@app.errorhandler(ValidationError)
def validation_error(e):
    return jsonify({"code": 400, "message": e.args})


@app.before_request
def before_request():
    forget_email = session.get("forget_email")
    if forget_email:
        user = User.query.filter_by(user_email=forget_email)
        if user:
            g.forget_email = forget_email


@app.context_processor
def context_processor():
    if hasattr(g, "forget_email"):
        return {"forget_email": g.forget_email}
    else:
        return {}
