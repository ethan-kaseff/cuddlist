from .db import db


class Cuddlist(db.Model):
    __tablename__ = 'cuddlists'

    id = db.Column(db.Integer, primary_key=True)
    session_price = db.Column(db.Integer, nullable=False)
    travel_price = db.Column(db.Integer, nullable=False)
    about_me = db.Column(db.Text, nullable=False)
    session_info = db.Column(db.Text, nullable=False)
    location = db.Column(db.String(100), nullable=False)
    user_id = db.Column(db.Integer, nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "location": self.location,
            "pet_friendly": self.pet_friendly,
            "private": self.private,
            "available": self.available,
            "user_id": self.user_id
        }
