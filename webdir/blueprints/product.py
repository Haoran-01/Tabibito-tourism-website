import datetime

from flask import Blueprint, jsonify, request
import os
from exts import db
from config import Config
from werkzeug.utils import secure_filename
from models import Product, ProductPicture, Tag, Trip, FeeDes, ProductType, Comment

bp = Blueprint("Product", __name__, url_prefix="/product")


@bp.route("/add", methods=["POST", "GET"])
def add_product():
    data = request.get_json()
    for i in data:
        print(i, ':', data[i])
    if 'name' in data and 'description' in data and 'group_number' in data:
        name = data['name']
        description = data['description']
        group_number = data['group_number']
        if name and description and group_number:
            product = Product(name=name, description=description, group_number=group_number)

            location = data['location']
            if location:
                product.raw_loc = location['raw_loc']
                product.map_latitude = location['map_latitude']
                product.map_longitude = location['map_longitude']
                product.map_zoom = location['map_zoom']
            discount = data['discount']
            if discount:
                product.discount = discount
            ori_price = data['ori_price']
            if ori_price:
                product.ori_price = ori_price
            currency = data['currency']
            if currency:
                product.currency = currency
            start_time = data['start_time']
            if start_time:
                product.start_time = datetime.datetime.fromtimestamp(int(start_time)/1000)
            end_time = data['end_time']
            if end_time:
                product.end_time = datetime.datetime.fromtimestamp(int(end_time)/1000)
            app_ddl = data['app_ddl']
            if app_ddl:
                product.app_ddl = datetime.datetime.fromtimestamp(int(app_ddl)/1000)

            db.session.add(product)
            db.session.commit()

            types = data['types']
            if types:
                for i in types:
                    t = ProductType.query.filter(ProductType.type == i).first()
                    product.types.append(t)

            cover_image = data['cover_image']
            if cover_image:
                p = ProductPicture(product_id=product.id, address=cover_image, type='cover')
                db.session.add(p)
            banner_image = data['banner_image']
            if banner_image:
                for p in banner_image:
                    p = ProductPicture(product_id=product.id, address=p, type='banner')
                    db.session.add(p)
            gallery = data['gallery']
            if gallery:
                for picture in gallery:
                    p = ProductPicture(product_id=product.id, address=picture, type='gallery')
                    db.session.add(p)

            tags = data['tags']
            if tags:
                for tag in tags:
                    if tag['key']:
                        t = Tag(key=tag["key"], value=tag['value'], product_id=product.id)
                        db.session.add(t)
            trips = data['trips']
            if trips:
                for trip in trips:
                    print(trip)
                    t = Trip(
                        product_id=product.id,
                        time=datetime.datetime.fromtimestamp(int(trip['time'])/1000),
                        activity=trip['activity'],
                        picture=trip['picture'],
                        day=trip['day'],
                        time_of_day=trip['time_of_day']
                    )
                    print(trip['location'])
                    t.exact = trip['location']['exact']
                    t.map_latitude = trip['location']['map_latitude']
                    t.map_longitude = trip['location']['map_longitude']
                    t.map_zoom = trip['location']['map_zoom']
                    db.session.add(t)
            fee_des = data['fee_des']
            if fee_des:
                for f in fee_des:
                    fee = FeeDes(product_id=product.id, name=f['name'], description=f['description'])
                    db.session.add(fee)

            db.session.commit()
            return jsonify(code=200)
        else:
            return jsonify(code=400, error="name or description or group_number null")
    else:
        return jsonify(code=400, error="name or description or group_number missing")


@bp.route("/detail", methods=['POST', 'GET'])
def product_detail():
    product_id = request.json.get('product_id')

    product = Product.query.filter(Product.id == product_id).first()
    return jsonify(product=product.serialize_detail())


@bp.route("/type_products", methods=["POST", "GET"])
def get_type_products():

    product_type = request.json.get('type')

    products = Product.query.join(Product.types).filter(ProductType.type == product_type).all()
    return jsonify(products=[product.serialize() for product in products])


@bp.route("/get_product_grade", methods=["POST", "GET"])
def get_product_grade():
    product_id = request.get_json(silent=True)["product_id"]
    product = Product.query.filter_by(id=product_id).first()
    if len(product.comments) != 0:
        marks = product.get_each_part_mark()
        return jsonify(code=200,
                       exceptional=marks["exceptional"], location=marks["location"], staff=marks["staff"],
                       cleanliness=marks["cleanliness"], value_for_money=marks["value_for_money"],
                       comfort=marks["comfort"], facilities=marks["facilities"],
                       free_wifi=marks["free_wifi"])
    else:
        return jsonify(code=201, message="No comments for the project")


@bp.route("/get_reviews", methods=["POST", "GET"])
def get_reviews_number():
    product_id = request.get_json(silent=True)["product_id"]
    product = Product.query.filter_by(id=product_id).first()
    return jsonify(code=200, reviews_num=len(product.comments))


@bp.route("/get_comment", methods=["POST"])
def get_comments():
    data = request.get_json(silent=True)
    product_id = data["product_id"]
    page = data["page"]
    page_size = 10
    comments = Comment.query.filter_by(product_id=product_id).order_by(Comment.datetime.desc())\
        .offset((page - 1) * page_size).limit(page_size).all()
    return jsonify(code=200, comments=[comment.serialize_product_page_simple() for comment in comments])


@bp.route("/uploadpicture", methods=["POST", "GET"])
def upload_picture():

    file = request.files['file']  # 获取上传的文件

    filename = secure_filename(file.filename)  # 安全获取文件名
    print(Config.UPLOAD_FOLDER)
    file.save(os.path.join(Config.UPLOAD_FOLDER, filename))  # 将文件保存到服务器的指定目录
    # 存入数据库的操作
    return os.path.join(Config.UPLOAD_FOLDER, filename)


@bp.route("/charge_detail", methods=["POST", "GET"])
def charge_detail():
    product_id = request.json.get("product_id")
    fee_des = FeeDes.query.filter(FeeDes.product_id == product_id).all()
    if len(fee_des) == 0:
        return jsonify(code="product not found")
    else:
        return jsonify(charges=[fee.serialize() for fee in fee_des])


@bp.route("/trips", methods=["POST", "GET"])
def get_trips():
    product_id = request.json.get("product_id")
    trips = Trip.query.filter(Trip.product_id == product_id).all()
    if len(trips) == 0:
        return jsonify(code="product not found")
    else:
        return jsonify(trips=[trip.serialize() for trip in trips])
