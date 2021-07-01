from .db import db
from .user import User


class Client(User):
    __tablename__ = 'clients'
    __mapper_args__ = {'polymorphic_identity': 'clients'}

    id = db.Column(db.Integer, db.ForeignKey('users.id'), primary_key=True)
    phone_number = db.Column(db.Integer)

    def to_dict(self):
        return {
            "id": self.id,
            "phone_number": self.phone_number,
            "email": self.email,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "pronouns": self.pronouns
        }
