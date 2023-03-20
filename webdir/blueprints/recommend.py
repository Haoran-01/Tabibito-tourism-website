from flask import Blueprint, jsonify

bp = Blueprint("Recommend", __name__, url_prefix="/recommend")


@bp.route("/product", methods="POST, GET")
def recommend_search():
    result = []
    return jsonify(result)