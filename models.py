from sqlalchemy import Column, Integer, String, Boolean, Float, Text, ForeignKey
from sqlalchemy.orm import relationship
from init import db




class Client(db.Model):
    __tablename__ = "client"
    id = Column(Integer, primary_key=True)
    first_name = Column(String(255))
    last_name = Column(String(255))
    billing_company = Column(String(255))
    billing_address = Column(String(255))
    city = Column(String(120))
    state = Column(String(120))
    zip_code = Column(String(20))
    country = Column(String(120))

    stripe_customer_id = Column(String(120))
    card_number = Column(String(16))
    expiration_month = Column(String(2))
    expiration_year = Column(String(4))
    order = relationship('Orders', backref="order", cascade="all, delete-orphan", lazy='dynamic')


class Order(db.Model):
    __tablename__ = 'order'
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('client.id'))

class Product(db.Model):
    __tablename__ = 'products'
    id = Column(Integer, primary_key=True)
    name = Column(String(50), unique=True)
    type = Column(String(50))  # main_sale, upsell1,upsell2
    price = Column(Float)

'''
class Product(db.Model):
    __tablename__ = 'products'
    id = Column(Integer, primary_key=True)
    name = Column(String(50), unique=True)
    type = Column(String(50))  # main_sale, upsell1,upsell2
    rebill = Column(Boolean(False))
    rebill_period = Column(Integer)
    price = Column(Float)
    description = Column(Text(500))
    img_url = Column(String(55))

    def __init__(self, name=None, product_type=None, rebill=False, rebill_period=0, price=0.00, description=None,
                 img_url=None):
        self.name = name
        self.type = product_type
        self.rebill = False
        self.rebill_period = 0
        self.price = price
        self.description = description
        sefl.img_url = img_url

    def __repr__(self):
        return '<Product %r>' % (self.name)
'''