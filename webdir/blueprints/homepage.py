from sqlalchemy import func
from flask import Blueprint, jsonify, request
import os
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
