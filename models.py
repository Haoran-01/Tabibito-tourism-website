from exts import db
from datetime import datetime
from flask_login import UserMixin
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship
from enum import Enum
from sqlalchemy import Enum as DBEnum

association_table = db.Table(
    'product_product_type', db.Model.metadata,
    db.Column('product_id', db.Integer, ForeignKey('product.id')),
    db.Column('product_type_id', db.Integer, ForeignKey('product_type.id'))
)


class PictureType(Enum):
    Cover = "Cover"
    Banner = "Banner"
    Gallery = 'Gallery'


class ProductStatus(Enum):
    Delisted = "Delisted"
    Launched = "Launched"


class UserJob(Enum):
    Customer = "Customer"
    Staff = "Staff"


class PType(Enum):
    WildlifeTour = "WildlifeTour"
    AdventureTour = 'AdventureTour'
    CityTour = 'CityTour'
    MuseumTour = 'MuseumTour'
    BeachesTour = 'BeachesTour'


class OrderStatus(Enum):
    Pending = "pending"
    Confirmed = "confirmed"
    Cancelled = "cancelled"


class Comment(db.Model):
    __tablename__ = "comment"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    #七方面评分
    location_grade = db.Column(db.Float, nullable=False, default=0)
    staff_grade = db.Column(db.Float, nullable=False)
    cleanliness_grade = db.Column(db.Float, nullable=False)
    value_for_money_grade = db.Column(db.Float, nullable=False, default=0)
    comfort_grade = db.Column(db.Float, nullable=False, default=0)
    facilities_grade = db.Column(db.Float, nullable=False, default=0)
    free_wifi_grade = db.Column(db.Float, nullable=False, default=0)
    datetime = db.Column(db.DateTime, nullable=False)
    des = db.Column(db.Text, nullable=False)
    like_num = db.Column(db.Integer, default=0)
    product_id = db.Column(db.Integer, ForeignKey('product.id', ondelete='CASCADE', onupdate='CASCADE'))
    user_id = db.Column(db.Integer, ForeignKey('user.user_id', ondelete='CASCADE', onupdate='CASCADE'))

    product = relationship('Product', back_populates="comments")
    user = relationship('User', back_populates="comments")
    pictures = relationship('CommentPicture', order_by='CommentPicture.id', back_populates="comment")
    likes = relationship('CommentLike', order_by='CommentLike.id', back_populates="comment")

    def __repr__(self):
        return "<Comment(key='%s', value='%2.2f')>" % (self.key, self.value)

    def serialize_homepage(self):
        return {
            'id': self.id,
            'datetime': self.datetime.timestamp(),
            'pictures': [picture.address for picture in self.pictures],
            'user_portrait': self.user.profile.picture_address,
            'product_name': self.product.name,
            'des': self.des
        }

    def serialize_product_page(self):
        return {
            'id': self.id,
            'datetime': self.datetime.timestamp(),
            'pictures': [picture.address for picture in self.pictures],
            'user_portrait': self.user.profile.picture_address,
            'product_name': self.product.name,
            'des': self.des,
            'value_for_money_grade': self.value_for_money_grade,
            'comfort_grade': self.comfort_grade,
            'facilities_grade': self.facilities_grade,
            'location_grade': self.location_grade,
            'staff_grade': self.staff_grade,
            'cleanliness_grade': self.cleanliness_grade,
            'free_wifi_grade': self.free_wifi_grade
        }


class CommentPicture(db.Model):
    __tablename__ = "comment_picture"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    address = db.Column(db.CHAR(200), nullable=False)

    comment_id = db.Column(db.Integer, ForeignKey('comment.id', ondelete='CASCADE', onupdate='CASCADE'))
    comment = relationship('Comment', back_populates="pictures")


class CommentLike(db.Model):
    __tablename__ = 'like'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, ForeignKey('user.user_id', ondelete='CASCADE', onupdate='CASCADE'))
    comment_id = db.Column(db.Integer, ForeignKey('comment.id', ondelete='CASCADE', onupdate='CASCADE'))

    comment = relationship('Comment', back_populates="likes")
    user = relationship('User', back_populates="likes")


class EmailCaptchaModel(db.Model):
    __tablename__ = "email_captcha"
    email = db.Column(db.CHAR(200), primary_key=True)
    captcha = db.Column(db.CHAR(10), nullable=False)
    create_time = db.Column(db.DateTime, default=datetime.now)


class FeeDes(db.Model):
    __tablename__ = "fee_des"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.CHAR(50), nullable=False)
    description = db.Column(db.CHAR(100), nullable=False)

    product_id = db.Column(db.Integer, ForeignKey('product.id', ondelete='CASCADE', onupdate='CASCADE'))
    product = relationship('Product', back_populates="fee_des")

    def serialize(self):
        return {
            'name': self.name,
            'description': self.description
        }

    def __repr__(self):
        return "<FeeDes(key='%s', value='%s')>" % (self.key, self.value)


class Order(db.Model):
    __tablename__ = 'order'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, ForeignKey('user.user_id', ondelete='CASCADE', onupdate='CASCADE'), nullable=False)
    product_id = db.Column(db.Integer, ForeignKey('product.id', ondelete='CASCADE', onupdate='CASCADE'), nullable=False)
    create_time = db.Column(db.DateTime, default=datetime.now)
    order_status = db.Column(DBEnum(OrderStatus), default=OrderStatus.Pending)

    product_number = db.Column(db.Integer, nullable=False)

    user = relationship('User', back_populates='orders')
    product = relationship('Product', back_populates='orders')

    def __repr__(self):
        return "<Order(id='%s', product_id='%2.2f')>" % (self.id, self.product_id)


class Product(db.Model):
    __tablename__ = "product"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.CHAR(100), nullable=False, default="name")
    description = db.Column(db.Text, nullable=False, default="des")
    group_number = db.Column(db.Integer, nullable=False, default=5)
    raw_loc = db.Column(db.CHAR(100), nullable=False, default="location")
    map_latitude = db.Column(db.CHAR(200), nullable=False, default="location")
    map_longitude = db.Column(db.CHAR(200), nullable=False, default="location")
    map_zoom = db.Column(db.Float, nullable=False, default=1.0)
    discount = db.Column(db.Float, nullable=True, default=1.0)
    currency = db.Column(db.CHAR(200), nullable=False, default='USD')
    ori_price = db.Column(db.Float, nullable=False, default=9999.99)
    start_time = db.Column(db.DateTime, nullable=False, default=datetime.now())
    end_time = db.Column(db.DateTime, nullable=False, default=datetime.now())
    app_ddl = db.Column(db.DateTime, nullable=False, default=datetime.now())
    status = db.Column(DBEnum(ProductStatus), default=ProductStatus.Launched)

    comments = relationship('Comment', order_by='Comment.id', back_populates="product")
    trips = relationship('Trip', order_by='Trip.id', back_populates="product")
    fee_des = relationship('FeeDes', order_by='FeeDes.id', back_populates="product")
    tags = relationship('Tag', order_by='Tag.id', back_populates="product")
    pictures = relationship('ProductPicture', order_by='ProductPicture.id', back_populates="product")
    user_browses = relationship('UserBrowse', order_by='UserBrowse.id', back_populates='product')
    orders = relationship('Order', order_by="Order.id", back_populates='product')
    types = relationship('ProductType', secondary=association_table, back_populates='products')

    def duration(self):
        return datetime.timestamp(self.end_time) - datetime.timestamp(self.start_time)

    def get_mark(self):

        comments = self.comments
        total_score = 0
        for comment in comments:
            total_score += comment.location_grade
            total_score += comment.staff_grade
            total_score += comment.cleanliness_grade
            total_score += comment.value_for_money_grade
            total_score += comment.comfort_grade
            total_score += comment.facilities_grade
            total_score += comment.free_wifi_grade
        if total_score == 0:
            return 0
        else:
            return total_score / (7 * len(comments))

    def get_cover(self):
        for picture in self.pictures:
            if picture.type == PictureType.Cover:
                return picture.address
        return None

    def gallery(self):
        result = []
        for picture in self.pictures:
            if picture.type == PictureType.Gallery:
                result.append(picture.address)
        return result

    def banners(self):
        result = []
        for picture in self.pictures:
            if picture.type == PictureType.Banner:
                result.append(picture.address)
        return result

    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'start_time': self.start_time,
            'end_time': self.end_time,
            'app_ddl': self.app_ddl,
            'price': self.ori_price,
            'discount': self.discount,
            'mark': self.get_mark(),
            'status': self.status.name
        }

    def serialize_homepage(self):
        return {
            'id': self.id,
            'name': self.name,
            'raw_loc': self.raw_loc,
            'duration': self.duration(),
            'price': self.ori_price * self.discount,
            'reviews': len(self.comments),
            'banners': self.banners(),
            'types': [type.type.name for type in self.types]
        }

    def serialize_staff_page(self):
        return {
            'id': self.id,
            'name': self.name,
            'start_time': self.start_time,
            'end_time': self.end_time,
            'app_ddl': self.app_ddl,
            'price': self.ori_price,
            'discount': self.discount,
            'mark': self.get_mark(),
            'review': len(self.comments),
            'status': self.status.name
        }

    def serialize_search(self):
        return {
            'id': self.id,
            'name': self.name,
            'duration': (self.end_time.timestamp() - self.start_time.timestamp()) * 1000,
            'location': self.raw_loc,
            'price': self.ori_price * self.discount,
            'mark': self.get_mark(),
            'reviews': len(self.comments),
            'tags': [tag.serialize() for tag in self.tags],
            'cover': self.get_cover()
        }

    def serialize_detail(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'location': self.raw_loc,
            'price': self.ori_price * self.discount,
            'mark': self.get_mark(),
            'reviews': len(self.comments),
            'group_number': self.group_number,
            'tags': [tag.serialize() for tag in self.tags],
            'cover_image': self.get_cover(),
            'gallery': self.gallery(),
            'banner_image': self.banners(),
            'start_time': self.start_time.date(),
            'end_time': self.end_time.date(),
            "fee_des": [fee.serialize() for fee in self.fee_des]
        }

    def __repr__(self):
        return "<Product(name='%s', description='%s', group_number='%s')>" % (
            self.name, self.description, self.group_number
        )


class ProductType(db.Model):
    __tablename__ = "product_type"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    type = db.Column(DBEnum(PType), default=PType.CityTour)
    products = relationship('Product', secondary=association_table, back_populates='types')


class ProductPicture(db.Model):
    __tablename__ = "product_picture"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    address = db.Column(db.CHAR(200), nullable=False)
    # 1-cover image 2-banner_image 3-gallery 待会我写到config里
    type = db.Column(DBEnum(PictureType), default=PictureType.Gallery)
    product_id = db.Column(db.Integer, ForeignKey('product.id', ondelete='CASCADE', onupdate='CASCADE'))
    product = relationship('Product', back_populates="pictures")


class Tag(db.Model):
    __tablename__ = "tag"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    key = db.Column(db.CHAR(25), nullable=False)
    value = db.Column(db.CHAR(100), nullable=False)

    product_id = db.Column(db.Integer, ForeignKey('product.id', ondelete='CASCADE', onupdate='CASCADE'))
    product = relationship('Product', back_populates="tags")

    def serialize(self):
        return {
            'key': self.key,
            'value': self.value
        }

    def __repr__(self):
        return "<Tag(key='%s', value='%s')>" % (self.key, self.value)


class Trip(db.Model):
    __tablename__ = "trip"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    time = db.Column(db.DateTime, nullable=False)
    exact = db.Column(db.CHAR(100), nullable=False)
    map_latitude = db.Column(db.CHAR(200), nullable=False)
    map_longitude = db.Column(db.CHAR(200), nullable=False)
    map_zoom = db.Column(db.Float, nullable=False)
    activity = db.Column(db.CHAR(250), nullable=False)
    picture = db.Column(db.CHAR(200))
    day = db.Column(db.CHAR(5), nullable=False)
    time_of_day = db.Column(db.CHAR(10), nullable=False)

    product_id = db.Column(db.Integer, ForeignKey('product.id', ondelete='CASCADE', onupdate='CASCADE'))
    product = relationship('Product', back_populates="trips")

    def __repr__(self):
        return "<Trip(time='%s', loc_detail='%s', activity='%s')>" % (self.time, self.loc_detail, self.activity)


class User(UserMixin, db.Model):
    __tablename__ = 'user'
    user_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_email = db.Column(db.CHAR(200), unique=True)
    user_first_name = db.Column(db.CHAR(200), nullable=False)
    user_last_name = db.Column(db.CHAR(200), nullable=False)
    user_password = db.Column(db.CHAR(200), nullable=False)

    comments = relationship('Comment', back_populates="user")
    profile = relationship('UserProfile', uselist=False, back_populates="user")
    user_browses = relationship('UserBrowse', order_by='UserBrowse.id', back_populates='user')
    orders = relationship('Order', order_by='Order.id', back_populates='user')
    likes = relationship('CommentLike', order_by='CommentLike.id', back_populates="user")

    def __repr__(self):
        return "<User(email='%s')>" % self.user_email

    def get_id(self):
        return self.user_id


class UserBrowse(db.Model):
    __tablename__ = 'user_browse'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, ForeignKey('user.user_id', ondelete='CASCADE', onupdate='CASCADE'), nullable=False)
    product_id = db.Column(db.Integer, ForeignKey('product.id', ondelete='CASCADE', onupdate='CASCADE'), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    duration = db.Column(db.Integer, nullable=False)

    user = relationship('User', back_populates='user_browses')
    product = relationship('Product', back_populates='user_browses')

    def __init__(self, user_id, product_id, duration):
        self.user_id = user_id
        self.product_id = product_id
        self.duration = duration

    def serialize(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'product_id': self.product_id,
            'created_at': self.created_at,
            'duration': self.duration
        }


class UserProfile(db.Model):
    __tablename__ = 'user_profile'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    picture_address = db.Column(db.CHAR(200))
    job = db.Column(DBEnum(UserJob), default=UserJob.Customer)
    user_id = db.Column(db.Integer, ForeignKey('user.user_id', ondelete='CASCADE', onupdate='CASCADE'))
    user = relationship('User', back_populates="profile")
