from flask import Blueprint, jsonify, request
import os
from config import Config
from werkzeug.utils import secure_filename
from models import Product, ProductPicture, Tag, Trip
bp = Blueprint("Product", __name__, url_prefix="/product")


@bp.route("/add", methods=["POST", "GET"])
def add_product():
    data = request.get_json()
    name = data['name']
    print(name)
    description = data['description']
    group_number = data['group_number']
    location = data['location']
    discount = data['discount']
    ori_price = data['ori_price']
    currency = data['currency']
    tags = data['tags']
    start_time = data['start_time']
    end_time = data['end_time']
    app_ddl = data['app_ddl']
    fee_des = data['fee_des']
    trips = data['trips']
    cover_image = data['cover_image']
    banner_image = data['banner_image']
    gallery = data['gallery']


    product = Product(name=name, description=description, group_number=group_number)
    if location is not None:
        if hasattr(location, "raw_loc"):
            product.raw_loc = location

    for picture in gallery:
        p = ProductPicture()


    return jsonify(code=200)

@bp.route("/uploadpicture",methods=["POST","GET"])
def upload_picture():

    file = request.files['picture']  # 获取上传的文件

    filename = secure_filename(file.filename)  # 安全获取文件名
    print(Config.UPLOAD_FOLDER)
    file.save(os.path.join(Config.UPLOAD_FOLDER, filename))  # 将文件保存到服务器的指定目录
    # 存入数据库的操作
    return jsonify(url=os.path.join(Config.UPLOAD_FOLDER, filename))

@bp.route("/test",methods=["POST","GET"])
def test():
    return jsonify(url="Jerry")