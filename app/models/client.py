from .db import db
from .user import User


class Client(User):
    __tablename__ = 'clients'

    id = db.Column(db.Integer, primary_key=True)
    phone_number = db.Column(db.Integer)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "phone_number": self.phone_number,
            "user_id": self.user_id
        }
