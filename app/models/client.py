from .db import db


class Client(db.Model):
    __tablename__ = 'clients'

    id = db.Column(db.Integer, primary_key=True)
    phone_number = db.Column(db.Integer, nullable=False)
    user_id = db.Column(db.Integer, nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "phone_number": self.phone_number,
            "user_id": self.user_id
        }
