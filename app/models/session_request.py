from .db import db
from sqlalchemy.dialects.postgresql import JSON


class Session_Request(db.Model):
    __tablename__ = 'session_requests'

    id = db.Column(db.Integer, primary_key=True)
    client_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    cuddler_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    form = db.Column(JSON, nullable=False)

    client = db.relationship('Client', foreign_keys=[client_id])
    cuddler = db.relationship('Cuddler', foreign_keys=[cuddler_id])