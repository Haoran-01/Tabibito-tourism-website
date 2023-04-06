import datetime

from flask import Blueprint, jsonify, request
from sqlalchemy import or_
from models import Product, Trip, Tag
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

    # Serialize the products to JSON
    result = {
        'total': products.total,
        'page': products.page,
        'per_page': products.per_page,
        'items': [product.serialize() for product in products.items]
    }
    return jsonify(result)
