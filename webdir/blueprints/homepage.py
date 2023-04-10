from sqlalchemy import func
from flask import Blueprint, jsonify, request
import datetime
from exts import db
from models import Product, ProductPicture, Tag, Trip, FeeDes, UserBrowse, Comment, User, Order
from collections import Counter
from sqlalchemy import and_

bp = Blueprint("Homepage", __name__, url_prefix="/homepage")


@bp.route("/most_popular_products", methods=["POST", "GET"])
def test():
    top_three_products = (
        db.session.query(Product)
        .outerjoin(UserBrowse)
        .group_by(Product.id)
        .order_by(func.count(UserBrowse.id).desc())
        .limit(3)
        .all()
    )

    return jsonify(products=[product.serialize_homepage() for product in top_three_products])


@bp.route("/search", methods=['GET'])
def search():
    location = request.json.get('location')
    tags = request.json.get('tags')
    start_time = datetime.datetime.fromtimestamp(request.json.get('start_time') / 1000)
    end_time = datetime.datetime.fromtimestamp(request.json.get('end_time') / 1000)
    print(start_time, end_time)

    products = Product.query.filter(Product.raw_loc.ilike(f'%{location}%'),
                                    Product.start_time >= start_time,
                                    Product.end_time <= end_time,
                                    Product.tags.any(Tag.key.in_(tags))
                                    ).all()
    return jsonify(products=[product.serialize_search() for product in products])


@bp.route("/location", methods=['GET'])
def locations():
    all_locations = [p.raw_loc for p in Product.query.all()]
    location_counts = Counter(all_locations)

    # 选出出现次数最多的8个location
    most_common_locations = location_counts.most_common(8)
    most_common_locations = [lc[0] for lc in most_common_locations]

    # 为每个location选出一个对应的cover
    covers = {}
    for loc in most_common_locations:
        # 找到该location的第一个product的第一张图片作为cover
        product = Product.query.filter_by(raw_loc=loc).first()
        if product:
            covers[loc] = product.pictures[0].address

    # 构造返回结果
    result = {
        "locations": [
            {
                "name": loc,
                "project_count": location_counts[loc],
                "picture": covers[loc]
            }
            for loc in most_common_locations
        ]
    }

    return result


@bp.route("/lowest_discount", methods=['GET'])
def lowest_discount_products():
    products = Product.query.order_by(Product.discount).limit(3).all()
    return jsonify(products=[product.serialize_homepage() for product in products])


@bp.route("/four_number", methods=['GET'])
def four_number():
    reviews = Comment.query.count()
    products = Product.query.count()
    # 计算平均分大于4的用户数量
    users_count = (
        db.session.query(User)
        .join(Comment)
        .with_entities(User.user_id)
        .group_by(User.user_id)
        .having(func.avg(
            Comment.location_grade +
            Comment.staff_grade +
            Comment.cleanliness_grade +
            Comment.value_for_money_grade +
            Comment.comfort_grade +
            Comment.facilities_grade +
            Comment.free_wifi_grade
        ) > 4.5)
        .count()
    )
    orders = Order.query.count()

    return jsonify(review_count=reviews, product_count=products, happy_customer_count=users_count, order_count=orders)


@bp.route("/next_two_months", methods=['GET'])
def next_two_months():
    now = datetime.datetime.now()
    end_date = now + datetime.timedelta(days=60)

    products = Product.query.filter(and_(Product.start_time >= now, Product.start_time <= end_date)).all()
    return jsonify(products=[product.serialize_homepage() for product in products])


@bp.route("/most_popular_comments", methods=["GET"])
def get_popular_comments():
    comments = db.session.query(Comment).order_by(Comment.like_num.desc()).limit(5).all()
    return jsonify(code=200, data=[comment.serialize_homepage() for comment in comments])
