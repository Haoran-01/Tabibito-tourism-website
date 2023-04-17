from flask import Blueprint, request, render_template

bp = Blueprint("Index", __name__, url_prefix="/")


@bp.route("/", methods=['POST', 'GET'])
def index():
    if request.method == 'GET':
        return render_template("index.html")
