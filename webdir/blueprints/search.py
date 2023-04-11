import datetime

from flask import Blueprint, jsonify, request
from sqlalchemy import or_, text

from exts import db
from models import Product, Trip, Tag, ProductType
import nltk
from nltk.corpus import stopwords
from nltk.stem import PorterStemmer
from nltk.stem import WordNetLemmatizer

bp = Blueprint('Search', __name__, url_prefix='/search')


def clean_text(text):
    print(datetime.datetime.now())
    # 将文本转换为小写
    text = text.lower()
    # 分词
    tokens = nltk.word_tokenize(text)
    # 去除标点符号和停用词
    stop_words = set(stopwords.words('english'))
    tokens = [word for word in tokens if word.isalnum() and word not in stop_words]
    # 词干提取
    stemmer = PorterStemmer()
    tokens = [stemmer.stem(word) for word in tokens]
    # 词形还原
    lemmatizer = WordNetLemmatizer()
    tokens = [lemmatizer.lemmatize(word) for word in tokens]
    # 返回清洗后的文本
    print(datetime.datetime.now())
    return ' '.join(tokens)


@bp.route('/product', methods=['POST'])
def search():
    """
    Searches for products based on user input keywords
    """
    data = request.get_json()
    keywords = data.get('keywords', '')
    page = data.get('page', 1)
    per_page = data.get('per_page', 10)

    keywords_cleaned = clean_text(keywords)

    # Search for products that match the keywords in name, description, tag, or trip location detail
    products = Product.query.filter(
        or_(Product.name.ilike(f'%{keywords_cleaned}%'),
            Product.description.ilike(f'%{keywords_cleaned}%'),
            Product.tags.any(Tag.key.ilike(f'%{keywords_cleaned}%')),
            Product.trips.any(Trip.exact.ilike(f'%{keywords_cleaned}%')))
    ).paginate(page=page, per_page=per_page)

    print(products)
    # Serialize the products to JSON
    result = {
        'total': products.total,
        'page': products.page,
        'per_page': products.per_page,
        'items': [product.serialize() for product in products.items]
    }
    return jsonify(result)


@bp.route('/product_number')
def get_product_number():
    data = request.get_json(silent=True)
    products = db.session.query(Product).all()
    # products = Product.query.filter(Product.start_time >= data["startTime"],
    #                                 Product.end_time <= data["endTime"],
    #                                 Product.currency == data["currentLocation"],
    #                                 Product.types.any(text(data["tourType"])),
    #                                 Product.ori_price in range(int(data["low_price"]), int(data["high_price"])),
    #                                 Product.duration == data['duration']).all()

    # 构造筛选条件
    filters = []
    if 'startTime' in data:
        filters.append({'field': 'startTime', 'operator': '>=', 'value': data['startTime']})
    if 'endTime' in data:
        filters.append({'field': 'endTime', 'operator': '<=', 'value': data['endTime']})
    if 'currentLocation' in data:
        filters.append({'field': 'currentLocation', 'operator': '==', 'value': data['currentLocation']})
    if 'tourType' in data:
        filters.append({'field': 'tourType', 'operator': '==', 'value': data['tourType']})
    if 'low_price' in data:
        filters.append({'field': 'price', 'operator': '>=', 'value': data['low_price']})
    if 'high_price' in data:
        filters.append({'field': 'price', 'operator': '<=', 'value': data['high_price']})
    if 'duration' in data:
        filters.append({'field': 'duration', 'operator': '==', 'value': data['duration']})

    # 使用筛选条件查询产品数据
    results = []
    for product in products:
        match = True
        for f in filters:
            if f['operator'] == '==':
                if f['field'] == 'currentLocation' and product.currency != f['value']:
                    match = False
                    break
                elif f['field'] == 'tourType' and product.currency != f['value']:
                    match = False
                    break
                elif f['field'] == 'duration' and product.currency != f['value']:
                    match = False
                    break
            elif f['operator'] == '>=':
                if f['field'] == 'startTime' and product.start_time.timestamp() < f['value']:
                    match = False
                    break
                elif f['field'] == 'low_price' and product.ori_price < f['value']:
                    match = False
                    break
            elif f['operator'] == '<=':
                if f['field'] == 'endTime' and product.start_time.timestamp() < f['value']:
                    match = False
                    break
                elif f['field'] == 'high_price' and product.ori_price < f['value']:
                    match = False
                    break
        if match:
            results.append(product)

    return jsonify(code=200, number=len(results))





@bp.route('/product_list')
def get_product_list():
    data = request.get_json(silent=True)
    products = Product.query.filter(Product.start_time >= data["startTime"],
                                    Product.end_time <= data["endTime"],
                                    Product.currency == data["currentLocation"],
                                    Product.types.any(text(data["tourType"])),
                                    Product.ori_price in range(int(data["low_price"]), int(data["high_price"])),
                                    Product.duration == data['duration']).all()
    page_number = data["page"]
    select_product = products[page_number * 3 - 3: page_number * 3]
    return jsonify(code=200, data=[product.serialize_product_list() for product in select_product])
