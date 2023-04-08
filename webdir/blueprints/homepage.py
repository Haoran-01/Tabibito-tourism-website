from sqlalchemy import func
from flask import Blueprint, jsonify, request
import os, datetime
from exts import db
from config import Config
from werkzeug.utils import secure_filename
from models import Product, ProductPicture, Tag, Trip, FeeDes, UserBrowse, Comment, User, Order
from collections import Counter

bp = Blueprint("Homepage", __name__, url_prefix="/homepage")


@bp.route("/most_popular_products", methods=["POST", "GET"])
def test():
    top_three_products = (
        db.session.query(Product)
            .join(Product.user_browses)
            .group_by(Product.id)
            .order_by(func.count(UserBrowse.id).desc())
            .limit(3)
            .all()
    )
    return jsonify(result=[product.serialize_homepage() for product in top_three_products])


@bp.route("/search", methods=['GET'])
def search():
    location = request.json.get('location')
    tag = request.json.get('tag')
    start_time = datetime.datetime.fromtimestamp(request.json.get('start_time') / 1000)
    end_time = datetime.datetime.fromtimestamp(request.json.get('end_time') / 1000)
    print(start_time, end_time)

    products = Product.query.filter(Product.raw_loc.ilike(f'%{location}%'),
                                    Product.start_time >= start_time,
                                    Product.end_time <= end_time,
                                    Product.tags.any(Tag.key.ilike(f'%{tag}%'))
                                    ).all()
    return jsonify(products=[product.serialize_search() for product in products])


@bp.route("/location", methods=['GET'])
def locations():
    # 统计所有location出现的次数
    all_locations = [p.raw_loc for p in Product.query.all()]
    location_counts = Counter(all_locations)

    # 选出出现次数最多的8个location
    most_common_locations = location_counts.most_common(8)
    most_common_locations = [lc[0] for lc in most_common_locations]

    # 为每个location选出一个对应的cover
    covers = {}
    for loc in most_common_locations:
        # 找到该location的第一个product作为cover
        product = Product.query.filter_by(raw_loc=loc).first()
        if product:
            covers[loc] = product.pictures[0].address

    return jsonify(covers=covers)


@bp.route("lowest_discount", methods=['GET'])
def lowest_discount_products():
    products = Product.query.order_by(Product.discount).limit(3).all()
    return jsonify(products=[product.serialize_homepage() for product in products])


@bp.route("four_number", methods=['GET'])
def four_number():
    reviews = Comment.query.count()
    products = Product.query.count()
    users_count = db.session.query(User).join(Comment).group_by(User.user_id).having(
        func.avg(Comment.value) > 4).count()
    orders = Order.query.count()

    return jsonify(reviwe_count=reviews, product_count=products, happy_customer_count=users_count, order_count=orders)


@bp.route("/most_popular_comments", methods=["GET"])
def get_popular_comments():
    comments = db.session.query(Comment).order_by(Comment.like_num.desc()).limit(5).all()
    return jsonify(code=200, data=[comment.serialize_homepage() for comment in comments])
