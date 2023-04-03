from flask import Blueprint, request, jsonify

from exts import db
from models import Order

bp = Blueprint("Order", __name__, url_prefix="/order")


@bp.route("/get_order_detail", methods=['POST'])
def get_order_detail():
    data = request.get_json(silent=True)
    order_id = data["order_id"]
    order_type = data['type']
    # 当后台看时
    if order_type == 1:
        order = Order.query.filter_by(id=order_id)
        jsonify(code=200, product_id=order.product_id, create_time=order.create_time, order_status=order.order_status,
                total=order.total, paid=order.paid)
    # 当用户看时
    elif order_type == 2:
        user_id = data["user_id"]
        order = Order.query.filter_by(id=order_id, user_id=user_id)
        jsonify(code=200, product_id=order.product_id, create_time=order.create_time, order_status=order.order_status,
                total=order.total, paid=order.paid)
    else:
        jsonify(code=400, message="not found")