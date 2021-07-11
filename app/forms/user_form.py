from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField, BooleanField
from wtforms.validators import DataRequired, Email, ValidationError


class UserForm(FlaskForm):
    first_name = StringField('first name', validators=[DataRequired()])
    last_name = StringField('last name', validators=[DataRequired()])
    pronouns = StringField('pronouns')
    session_price = IntegerField('session price')
    travel_price = IntegerField('travel price')
    about_me = TextAreaField('about me')
    session_info = TextAreaField('session info')
    location = TextAreaField('location')
    live = BooleanField('live')
    phone_number = IntegerField('phone number')
