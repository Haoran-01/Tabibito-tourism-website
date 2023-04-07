from flask import Blueprint, request, jsonify

from exts import db
from models import Order

bp = Blueprint("Staff", __name__, url_prefix="/staff_portal")


@bp.route("/change_order_status", methods=['POST'])
def change_status():
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


@bp.route("/product_list",methods=["POST","GET"])
def test():
    return jsonify(url="Jerry")