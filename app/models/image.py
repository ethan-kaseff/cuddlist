from .db import db


class Image(db.Model):
    __tablename__ = 'images'

    id = db.Column(db.Integer, primary_key=True)
    cuddlist_id = db.Column(db.Integer, db.ForeignKey('cuddlists.id'),
                            nullable=False)
    url = db.Column(db.String, nullable=False)

    cuddlist = db.relationship('Cuddlist', foreign_keys=[cuddlist_id], backref='images', uselist=False)

    def to_dict(self):
        return {
            'id': self.id,
            'cuddlistId': self.cuddlist_id,
            'url': self.url
        }