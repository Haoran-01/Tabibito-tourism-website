import datetime

from flask import Blueprint, jsonify, g
import numpy as np
from models import UserBrowse, Product, User
from collections import defaultdict
bp = Blueprint("Recommend", __name__, url_prefix="/recommend")


def get_similarity_score(user1, user2, similarity_matrix):
    # Get the products that both users have browsed
    common_products = set(user1.browsed_products).intersection(set(user2.browsed_products))

    # Calculate the sum of similarities between all common products
    similarity_sum = 0
    for product1 in common_products:
        for product2 in common_products:
            if product1 != product2:
                similarity_sum += similarity_matrix[product1.id][product2.id]

    # Calculate the similarity score as the average similarity of common products
    similarity_score = similarity_sum / len(common_products)

    return similarity_score


def build_similarity_matrix(users):
    # keys: Product values: lists of users browsed
    product_users = {}
    for user in users:
        for browse in user.user_browses:
            if browse.product not in product_users:
                product_users[browse.product] = []
            product_users[browse.product].append(user)

    # Compute pairwise similarity scores between all products based on their tags
    similarity_matrix = {}
    for product1 in product_users:
        similarity_matrix[product1] = []
        for product2 in product_users:
            if product1 == product2:
                continue
            similarity_score = get_similarity_score(product1.tags, product2.tags)
            similarity_matrix[product1].append((product2, similarity_score))

        # Sort the list of similar products in descending order of similarity score
        similarity_matrix[product1].sort(key=lambda x: x[1], reverse=True)

    return similarity_matrix


def get_similarity_matrix():
    if hasattr(g, "similarity_matrix"):
        if (datetime.datetime.now()-g.datetime).seconds < 3600:
            return g.similarity_matrix
        else:
            users = User.query.all()
            g.similarity_matrix = build_similarity_matrix(users)
            g.datetime = datetime.datetime.now()
            return g.similarity_matrix
    else:
        users = User.query.all()
        g.similarity_matrix = build_similarity_matrix(users)
        g.datetime = datetime.datetime.now()
        return g.similarity_matrix

def get_user_ratings():
    # 获取所有用户的评分
    users = User.query.all()
    products = Product.query.all()

    # 构建用户评分矩阵
    ratings = np.zeros((len(users), len(products)))
    for i, user in enumerate(users):
        for j, product in enumerate(products):
            browse = UserBrowse.query.filter_by(user_id=user.user_id, product_id=product.id).first()
            if browse is not None:
                ratings[i][j] = browse.duration

    return ratings


def recommend_products(user_id, n=5):
    # 获取用户浏览过的所有产品的ID
    browsed_products = [browse.product_id for browse in UserBrowse.query.filter_by(user_id=user_id).all()]

    # 获取所有产品的tag列表
    products = Product.query.all()
    product_tags = defaultdict(list)
    for product in products:
        for tag in product.tags:
            product_tags[product.id].append(tag.name)

    # 构建用户浏览记录矩阵
    user_matrix = defaultdict(list)
    for browse in UserBrowse.query.filter_by(user_id=user_id).all():
        user_matrix[browse.product_id].append(browse.duration)

    # similarity_matrix:
    similarity_matrix = get_similarity_matrix()
    # 构建用户偏好向量
    user_pref = defaultdict(float)
    for product_id, durations in user_matrix.items():
        product_similarities = [similarity_matrix[product_id][browsed_product] for browsed_product in browsed_products if browsed_product != product_id]
        if len(product_similarities) > 0:
            user_pref[product_id] = sum(product_similarities) / len(product_similarities)

    # 获取推荐列表
    recommendation_scores = defaultdict(float)
    for product_id, tags in product_tags.items():
        if product_id in user_matrix:
            continue
        product_similarities = [similarity_matrix[product_id][browsed_product] for browsed_product in browsed_products if browsed_product in similarity_matrix[product_id]]
        if len(product_similarities) > 0:
            recommendation_scores[product_id] = sum(product_similarities) / len(product_similarities)
        else:
            continue
        for tag in tags:
            if tag in user_pref:
                recommendation_scores[product_id] += user_pref[tag]

    # 根据推荐得分排序并返回前n个推荐结果
    sorted_recommendations = sorted(recommendation_scores.items(), key=lambda x: x[1], reverse=True)
    return [Product.query.get(rec[0]) for rec in sorted_recommendations[:n]]



@bp.route("/product", methods="POST, GET")
def recommend_search():

    result = []

    return jsonify(result)