import nltk
from flask import Blueprint, jsonify, g
from models import UserBrowse, Product, User
bp = Blueprint("Recommend", __name__, url_prefix="/recommend")


# nltk.download('stopwords')
# nltk.download('wordnet')
# 首先，我们需要一个函数来计算两个字符串的相似度
wnl = nltk.WordNetLemmatizer()
stopwords = set(nltk.corpus.stopwords.words('english'))


# 定义一个函数来清洗字符串
def clean_string(s):
    # 把字符串转换为小写
    s = s.lower()
    # 用nltk的WordPunctTokenizer来把字符串分成单词
    tokens = nltk.tokenize.wordpunct_tokenize(s)
    # 去掉单词中的标点符号和停用词
    words = [w for w in tokens if w.isalpha() and w not in stopwords]
    # 把单词还原为它们的基本形式
    words = [wnl.lemmatize(w) for w in words]
    # 把单词拼接成一个字符串
    cleaned_string = ' '.join(words)
    return cleaned_string


# 定义一个函数来计算两个字符串的相似度
def calculate_similarity(str1, str2):
    # 先清洗两个字符串
    str1 = clean_string(str1)
    str2 = clean_string(str2)
    # 使用nltk的编辑距离算法来计算两个字符串的相似度
    distance = nltk.edit_distance(str1, str2)
    # 把编辑距离转换为相似度得分，得分越高表示相似
    similarity = 1 - (distance / max(len(str1), len(str2)))
    return similarity


def set_similar(set1, set2):
    print(set1, set2)
    return len(set1.intersection(set2)) / (len(set1) + len(set2)) > 0.3


# 接下来，我们需要遍历用户的浏览记录，找到匹配的商品
def find_similar_products(user_browse, all_products):
    similar_products = set()
    for browse in user_browse:
        for product in all_products:
            # 如果商品类型相同或者商品所在位置相似或者商品名称相似
            if set_similar(set(product.types), set(browse.product.types)) or product.raw_loc == browse.product.raw_loc or calculate_similarity(product.name, browse.product.name) >= 0.8:
                # 将商品添加到相似商品列表中
                similar_products.add(product)
            # 如果商品标签中的某些键和值相似
            for tag in product.tags:
                for browse_tag in browse.product.tags:
                    if tag.key == browse_tag.key and calculate_similarity(tag.value, browse_tag.value) >= 0.8:
                        # 将商品添加到相似商品列表中
                        similar_products.add(product)
                        break
    # 返回所有匹配的相似商品
    return similar_products


@bp.route("/products", methods=["POST", "GET"])
def recommend_search():

    browses = User.query.filter_by(user_id=2).first().user_browses
    prducts = Product.query.all()

    result = list(find_similar_products(browses, prducts))[:4]

    return jsonify(products=[product.serialize_homepage() for product in result])