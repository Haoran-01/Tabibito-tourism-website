from datetime import datetime

from flask import Blueprint, request, jsonify

from exts import db
from models import Comment, CommentPicture

bp = Blueprint("Comment", __name__, url_prefix="/comment")


@bp.route("/add_comment", methods=["POST"])
def add_comment():
    data = request.get_json(silent=True)
    # user = User.query.filter_by(user_id=data["user_id"])
    comment = Comment(service_grade=data["service_grade"], cost_effective_grade=data["cost_effective_grade"], scenery_grade=data["scenery_grade"]
                      , datetime=datetime.now(), des=data["des"], user_id=data["user_id"], product_id=data["product_id"])
    db.session.add(comment)
    db.session.commit()

    for picture in data["pics"]:
        comment_picture = CommentPicture(address=picture["pic_url"], comment_id=comment.id)
        db.session.add(comment_picture)
    db.session.commit()

    return jsonify(code=200, message="add comment success")


@bp.route("/delete_comment", methods=["POST"])
def delete_comment():
    data = request.get_json(silent=True)
    comment = Comment.query.filter_by(id=data["comment_id"]).first()
    db.session.delete(comment)
    db.session.commit()
    return jsonify(code=200, message="delete comment success")


@bp.route("/get_comment_detail", methods=["POST"])
def get_comment_detail():
    data = request.get_json(silent=True)
    comment = Comment.query.filter_by(id=data["comment_id"]).first()

    return jsonify(code=200, detail=comment.serialize_product_page())


# @bp.route("/add_like", methods=["POST"])
# def add_like():
#     # 判断是否已经点赞 （前端）
#     data = request.get_json(silent=True)
#     if_like = data["if_like"]
#     if if_like:
#     comment = Comment.query.filter_by(id=data["comment_id"])
#     comment.like_num += 1
#     db.session.commit()
#     return jsonify(code=200, message="add like success")

# @bp.route("/get_popular_comment", methods=["GET"])
# def get_popular_comment():









