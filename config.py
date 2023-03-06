import os
basedir = os.path.abspath(os.path.dirname(__file__))


class Config:
    FLASKY_ADMIN_A = '2272393014@qq.com'
    FLASKY_ADMIN_B = '1104028870@qq.com'
    FLASKY_ADMIN_C = ''
    FLASKY_ADMIN_D = ''
    FLASKY_ADMIN_E = ''
    FLASKY_ADMIN_F = ''

    @staticmethod
    def init_app(app):
        pass


class DevelopmentConfig(Config):
    DEBUG = True
    # SQLALCHEMY_DATABASE_URI = \
    #     "sqlite:///" + os.path.join(basedir, 'data.sqlite')
    # SQLALCHEMY_TRACK_MODIFICATIONS = True


class TestingConfig(Config):
    TESTING = True
    # SQLALCHEMY_DATABASE_URI = \
    #     "sqlite:///" + os.path.join(basedir, "data.sqlite")
    # SQLALCHEMY_TRACK_MODIFICATIONS = True


class ProductionConfig(Config):
    DEBUG = False
    TESTING = False
    # SQLALCHEMY_DATABASE_URI = \
    #     "sqlite:///" + os.path.join(basedir, "data.sqlite")
    # SQLALCHEMY_TRACK_MODIFICATIONS = True


config = {
    "development": DevelopmentConfig,
    "testing": TestingConfig,
    "production": ProductionConfig,
    "default": DevelopmentConfig
}