from .db import db
from .user import User


class Client(User):
    __tablename__ = 'clients'

    id = db.Column(db.Integer, primary_key=True)
    phone_number = db.Column(db.Integer, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    # request = db.relationship('Session_Request', foreign_keys='Session_Request.client_id', back_populates='client')

    def to_dict(self):
        return {
            "id": self.id,
            "phone_number": self.phone_number,
            "user_id": self.user_id
        }
