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
            "session_price": self.session_price,
            "travel_price": self.travel_price,
            "about_me": self.about_me,
            "session_info": self.session_info,
            "location": self.location,
            "user_id": self.user_id
        }
