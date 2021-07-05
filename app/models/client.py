from .db import db
from .user import User


class Client(User):
    __tablename__ = 'clients'
    __mapper_args__ = {'polymorphic_identity': 'clients'}

    id = db.Column(db.Integer, db.ForeignKey('users.id'), primary_key=True)
    phone_number = db.Column(db.String)

    def to_dict(self):
        return {
            "id": self.id,
            "phoneNumber": self.phone_number,
            "email": self.email,
            "firstName": self.first_name,
            "lastName": self.last_name,
            "pronouns": self.pronouns
        }
