from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired


class ImageForm(FlaskForm):
    cuddlist_id = IntegerField('cuddlist id', validators=[DataRequired()])
    url = StringField('url', validators=[DataRequired()])
