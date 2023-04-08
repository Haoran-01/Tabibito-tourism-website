from sqlalchemy import func
from flask import Blueprint, jsonify, request
import os, datetime
from exts import db
from config import Config
from werkzeug.utils import secure_filename
from models import Product, ProductPicture, Tag, Trip, FeeDes, UserBrowse
bp = Blueprint("Homepage", __name__, url_prefix="/homepage")


@bp.route("/most_popular_products", methods=["POST","GET"])
def test():
    top_three_products = (
        db.session.query(Product)
        .join(Product.user_browses)
        .group_by(Product.id)
        .order_by(func.count(UserBrowse.id).desc())
        .limit(3)
        .all()
    )
    return jsonify(result=[product.serialize() for product in top_three_products])

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