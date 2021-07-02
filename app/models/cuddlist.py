from .db import db
from .user import User


class Cuddlist(User):
    __tablename__ = 'cuddlists'
    __mapper_args__ = {'polymorphic_identity': 'cuddlists'}

    id = db.Column(db.Integer, db.ForeignKey('users.id'), primary_key=True)
    session_price = db.Column(db.Integer)
    travel_price = db.Column(db.Integer)
    about_me = db.Column(db.Text)
    session_info = db.Column(db.Text)
    location = db.Column(db.String(100))

    def to_dict(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "pronouns": self.pronouns,
            "session_price": self.session_price,
            "travel_price": self.travel_price,
            "about_me": self.about_me,
            "session_info": self.session_info,
            "location": self.location,
            "email": self.email,
        }
