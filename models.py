from exts import db
from datetime import datetime
from flask_login import UserMixin
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship


class User(UserMixin, db.Model):
    __tablename__ = 'user'
    user_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_email = db.Column(db.CHAR(200), unique=True)
    user_first_name = db.Column(db.CHAR(200), nullable=False)
    user_last_name = db.Column(db.CHAR(200), nullable=False)
    user_password = db.Column(db.CHAR(200), nullable=False)

    comments = relationship('Comment', back_populates="user")
    profile = relationship('UserProfile', uselist=False, back_populates="user")
    user_browses = relationship('UserBrowse', back_populates='user')

    def __repr__(self):
        return "<User(email='%s')>" % self.user_email


class UserProfile(db.Model):
    __tablename__ = 'user_profile'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    picture_address = db.Column(db.CHAR(200))
    user_id = db.Column(db.Integer, ForeignKey('user.user_id', ondelete='CASCADE', onupdate='CASCADE'))
    user = relationship('User', back_populates="profile")


class EmailCaptchaModel(db.Model):
    __tablename__ = "email_captcha"
    email = db.Column(db.CHAR(200), primary_key=True)
    captcha = db.Column(db.CHAR(10), nullable=False)
    create_time = db.Column(db.DateTime, default=datetime.now)


class Product(db.Model):
    __tablename__ = "product"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.CHAR(100), nullable=False, unique=True)
    description = db.Column(db.Text, nullable=False)
    raw_loc = db.Column(db.CHAR(100), nullable=False)
    google_loc = db.Column(db.CHAR(200), nullable=False)
    discount = db.Column(db.Float, nullable=True)
    ori_price = db.Column(db.Float, nullable=False)
    start_time = db.Column(db.DateTime, nullable=False)
    end_time = db.Column(db.DateTime, nullable=False)
    app_ddl = db.Column(db.DateTime, nullable=False)

    comments = relationship('Comment', order_by='Comment.id', back_populates="product")
    trips = relationship('Trip', order_by='Trip.id', back_populates="product")
    fee_des = relationship('FeeDes', order_by='FeeDes.id', back_populates="product")
    tags = relationship('Tag', order_by='Tag.id', back_populates="product")
    pictures = relationship('ProductPicture', order_by='ProductPicture.id', back_populates="product")
    user_browses = relationship('UserBrowse', order_by='UserBrowse.id', back_populates='product')


    def __repr__(self):
        return "<Product(name='%s')>" % self.name

class Tag(db.Model):
    __tablename__ = "tag"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    key = db.Column(db.CHAR(25), nullable=False)
    icon = db.Column(db.CHAR(200), nullable=False)
    value = db.Column(db.CHAR(25), nullable=False)

    product_id = db.Column(db.Integer, ForeignKey('product.id',ondelete='CASCADE', onupdate='CASCADE'))
    product = relationship('Product', back_populates="tags")

    def __repr__(self):
        return "<Tag(key='%s', value='%s')>" % (self.key, self.value)


class Trip(db.Model):
    __tablename__ = "trip"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    time = db.Column(db.DateTime, nullable=False)
    loc_detail = db.Column(db.CHAR(70), nullable=False)
    activity = db.Column(db.CHAR(100), nullable=False)

    product_id = db.Column(db.Integer, ForeignKey('product.id', ondelete='CASCADE', onupdate='CASCADE'))
    product = relationship('Product', back_populates="trips")

    def __repr__(self):
        return "<Trip(time='%s', loc_detail='%s', activity='%s')>" % (self.time, self.loc_detail, self.activity)


class ProductPicture(db.Model):
    __tablename__ = "product_picture"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    address = db.Column(db.CHAR(200), nullable=False)

    product_id = db.Column(db.Integer, ForeignKey('product.id', ondelete='CASCADE', onupdate='CASCADE'))
    product = relationship('Product', back_populates="pictures")


class FeeDes(db.Model):
    __tablename__ = "fee_des"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    key = db.Column(db.CHAR(25), nullable=False)
    value = db.Column(db.CHAR(50), nullable=False)

    product_id = db.Column(db.Integer, ForeignKey('product.id', ondelete='CASCADE', onupdate='CASCADE'))
    product = relationship('Product', back_populates="fee_des")

    def __repr__(self):
        return "<FeeDes(key='%s', value='%s')>" % (self.key, self.value)


class Comment(db.Model):
    __tablename__ = "comment"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    key = db.Column(db.CHAR(20), nullable=False)  # 服务 service, 性价比 cost_effective, 风景scenery
    value = db.Column(db.Float, nullable=False)
    datetime = db.Column(db.DateTime, nullable=False)
    des = db.Column(db.Text, nullable=False)
    like_num = db.Column(db.Integer, default=0)
    product_id = db.Column(db.Integer, ForeignKey('product.id', ondelete='CASCADE', onupdate='CASCADE'))
    user_id = db.Column(db.Integer, ForeignKey('user.user_id', ondelete='CASCADE', onupdate='CASCADE'))

    product = relationship('Product', back_populates="comments")
    user = relationship('User', back_populates="comments")
    pictures = relationship('CommentPicture', order_by='CommentPicture.id', back_populates="comment")

    def __repr__(self):
        return "<Comment(key='%s', value='%2.2f')>" % (self.key, self.value)


class CommentPicture(db.Model):
    __tablename__ = "comment_picture"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    address = db.Column(db.CHAR(200), nullable=False)

    comment_id = db.Column(db.Integer, ForeignKey('comment.id', ondelete='CASCADE', onupdate='CASCADE'))
    comment = relationship('Comment', back_populates="pictures")


class UserBrowse(db.Model):
    __tablename__ = 'user_browse'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, ForeignKey('user.user_id'), nullable=False)
    product_id = db.Column(db.Integer, ForeignKey('product.id'), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    duration = db.Column(db.Integer, nullable=False)

    # Define relationships
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