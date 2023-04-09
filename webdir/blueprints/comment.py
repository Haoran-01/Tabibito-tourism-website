from datetime import datetime

from flask import Blueprint, request, jsonify

from exts import db
from models import Comment, CommentPicture, CommentLike

bp = Blueprint("Comment", __name__, url_prefix="/comment")


@bp.route("/add_comment", methods=["POST"])
def add_comment():
    data = request.get_json(silent=True)
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


@bp.route("/add_like", methods=["POST"])
def add_like():
    # 判断是否已经点赞 （前端）
    data = request.get_json(silent=True)
    if_like = data["if_like"]
    comment = Comment.query.filter_by(id=data["comment_id"]).first()
    if if_like:
        new_like = CommentLike(comment_id=comment.id, user_id=data["user_id"])
        db.session.add(new_like)
        comment.like_num += 1
        db.session.commit()
        return jsonify(code=200, message="add like success")
    else:
        the_like = CommentLike.query.filter_by(comment_id=comment.id, user_id=data["user_id"]).first()
        db.session.delete(the_like)
        comment.like_num -= 1
    db.session.commit()
    return jsonify(code=200, message="delete like success")


@bp.route("/get_product_comment", methods=["GET"])
def get_product_comment():
    data = request.get_json(silent=True)
    product_id = data["product_id"]
    comments = Comment.query.filter_by(product_id=product_id).all()
    return jsonify(code=200, data=[comment.serialize_product_page() for comment in comments])










