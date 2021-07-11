from .db import db


class Message(db.Model):
    __tablename__ = 'messages'

    id = db.Column(db.Integer, primary_key=True)
    sender_id = db.Column(db.Integer, db.ForeignKey('users.id'), 
                          nullable=False)
    chat_room_id = db.Column(db.Integer, db.ForeignKey('chat_rooms.id'), 
                             nullable=False)
    content = db.Column(db.Text, nullable=False)
    time = db.Column(db.String, nullable=False)

    user = db.relationship('User', foreign_keys=[sender_id], 
                           backref='messages', uselist=False)
    chat_room = db.relationship('ChatRoom',
                                foreign_keys=[chat_room_id],
                                backref='messages',
                                uselist=False)

    def to_dict(self):
        return {
            'id': self.id,
            'senderId': self.sender_id,
            'chatRoomId': self.chat_room_id,
            'content': self.content,
            'time': self.time,
        }