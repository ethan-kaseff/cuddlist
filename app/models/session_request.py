from .db import db
from sqlalchemy.dialects.postgresql import JSON


class SessionRequest(db.Model):
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

    def to_dict(self):
        return {
            "id": self.id,
            "clientId": self.client_id,
            "cuddlistId": self.cuddlist_id,
            # "form": self.form,
            "form": {
                "sessionLength": self.form['session_length'],
                "sessionDate": self.form["session_date"],
                "whySession": self.form['why_session'],
                "getOutOfIt": self.form['get_out_of_it'],
                "questions": self.form['questions']
            },
            "client": self.client.to_dict_for_session_request(),
            "cuddler": self.cuddler.to_dict_for_session_request()
        }
