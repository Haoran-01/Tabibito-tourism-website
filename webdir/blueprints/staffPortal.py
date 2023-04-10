from flask import Blueprint, request, jsonify

from exts import db
from models import Order, Product

bp = Blueprint("Staff", __name__, url_prefix="/staff_portal")


@bp.route("/change_order_status", methods=['POST'])
def change_order_status():
    data = request.get_json(silent=True)
    order_id = data['order_id']
    order = Order.query.filter_by(id=order_id)
    order.order_status = data['order_status']
    db.session.commit()
    return jsonify(message="modify successfully", code=200)


@bp.route("/view_all", methods=['POST'])
def view_all_order():
    all_orders = db.session.query(Order).all()
    result = []
    for i in all_orders:
        order_id = i.id
        result.append(order_id)
    return jsonify(all_orders=result, code=200)


@bp.route("/product_number",methods=["GET"])
def product_number():
    number = Product.query.count()
    return jsonify(number=number)


@bp.route("/product_list", methods=['GET', 'POST'])
def product_list():
    data = request.get_json()
    page = data['page']
    print(page)
    per_page = 10  # 每页10个对象
    products = Product.query.order_by(Product.id).paginate(page=page, per_page=per_page, error_out=False).items
    return jsonify(products=[product.serialize_staff_page() for product in products])


@bp.route("/product_status", methods=['POST'])
def change_product_status():
    data = request.get_json()
    product_id = data['id']
    new_status = data['operation']
    product = Product.query.filter_by(id=product_id).first()
    if product is not None:
        product.status = new_status
        db.session.commit()
        return jsonify(code=200)
    else:
        return jsonify(code=400, error='product not found')

