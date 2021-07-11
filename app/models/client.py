from sqlalchemy.orm import backref
from .db import db
from .user import User


class Client(User):
    __tablename__ = 'clients'
    __mapper_args__ = {'polymorphic_identity': 'clients'}

    id = db.Column(db.Integer, db.ForeignKey('users.id', ondelete='CASCADE'), primary_key=True)
    phone_number = db.Column(db.String)

    user = db.relationship('User', backref=db.backref(
        'client', passive_deletes=True))

    def to_dict(self):
        return {
            "id": self.id,
            "phoneNumber": self.phone_number,
            "email": self.email,
            "firstName": self.first_name,
            "lastName": self.last_name,
            "pronouns": self.pronouns,
            "sessionRequests": [session_request.to_dict() for
                                session_request in self.session_requests],
            "chatRooms": [chat_room.to_dict() for
                          chat_room in self.chat_rooms],
            "type": self.type
        }

    def to_dict_for_session_request(self):
        return {
            "id": self.id,
            "firstName": self.first_name,
            "lastName": self.last_name,
        }
