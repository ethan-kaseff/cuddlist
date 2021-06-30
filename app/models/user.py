from sqlalchemy.orm import backref
from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    first_name = db.Column(db.String(20), nullable=False)
    last_name = db.Column(db.String(40), nullable=False)
    pronouns = db.Column(db.String(20))

    # cuddlist = db.relationship(
    #     'Cuddlist', foreign_keys='Cuddlist.id', backref='user', uselist=False)
    # client = db.relationship(
    #     'Client', foreign_keys='Client.id', backref='user', uselist=False)

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
          "id": self.id,
          "email": self.email,
          "first_name": self.first_name,
          "last_name": self.last_name,
          "pronouns": self.pronouns
        }
