from .db import db
from .user import User


class Cuddlist(User):
    __tablename__ = 'cuddlists'
    __mapper_args__ = {'polymorphic_identity': 'cuddlists'}

    id = db.Column(db.Integer, db.ForeignKey(
        'users.id', ondelete='CASCADE'), primary_key=True)
    session_price = db.Column(db.Integer)
    travel_price = db.Column(db.Integer)
    about_me = db.Column(db.Text)
    session_info = db.Column(db.Text)
    location = db.Column(db.String(100))
    live = db.Column(db.Boolean)

    user = db.relationship('User', backref=db.backref(
        'cuddlist', passive_deletes=True))

    def to_dict(self):
        return {
            "id": self.id,
            "email": self.email,
            "firstName": self.first_name,
            "lastName": self.last_name,
            "pronouns": self.pronouns,
            "sessionPrice": self.session_price,
            "travelPrice": self.travel_price,
            "aboutMe": self.about_me,
            "sessionInfo": self.session_info,
            "location": self.location,
            "sessionRequests": [session_request.to_dict() for
                                session_request in self.session_requests],
            "chatRooms": [chat_room.to_dict() for
                          chat_room in self.chat_rooms],
            "type": self.type,
            "live": self.live,
            'images': [image.to_dict() for
                       image in self.images],
        }

    def to_dict_for_session_request(self):
        return {
            "id": self.id,
            "firstName": self.first_name,
            "lastName": self.last_name,
        }
