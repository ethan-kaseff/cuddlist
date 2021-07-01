from .db import db
from sqlalchemy.dialects.postgresql import JSON


class Session_Request(db.Model):
    __tablename__ = 'session_requests'

    id = db.Column(db.Integer, primary_key=True)
    client_id = db.Column(db.Integer, db.ForeignKey('clients.id'))
    cuddlist_id = db.Column(db.Integer, db.ForeignKey('cuddlists.id'))
    form = db.Column(JSON, nullable=False)

    client = db.relationship('Client', foreign_keys=[
                             client_id], backref='session_requests',
                             uselist=False)
    cuddler = db.relationship('Cuddlist', foreign_keys=[
                              cuddlist_id], backref='session_requests',
                              uselist=False)
