from .db import db


class ChatRoom(db.Model):
    __tablename__ = 'chat_rooms'

    id = db.Column(db.Integer, primary_key=True)
    client_id = db.Column(db.Integer, db.ForeignKey('clients.id'), nullable=False)
    cuddlist_id = db.Column(db.Integer, db.ForeignKey('cuddlists.id'), nullable=False)

    client = db.relationship('Client',
                             foreign_keys=[client_id],
                             backref='chat_rooms',
                             uselist=False)
    cuddler = db.relationship('Cuddlist',
                              foreign_keys=[cuddlist_id],
                              backref='chat_rooms',
                              uselist=False)

    def to_dict(self):
        return {
            'id': self.id,
            'clientId': self.client_id,
            'cuddlistId': self.cuddlist_id,
            "messages": [message.to_dict() for
                         message in self.messages],
        }
