from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField
from wtforms.validators import DataRequired, Email, ValidationError
# from app.models import User


# def user_exists(form, field):
#     print("Checking if user exits", field.data)
#     email = field.data
#     user = User.query.filter(User.email == email).first()
#     if user:
#         raise ValidationError("User is already registered.")


class CuddlistForm(FlaskForm):
    # email = StringField('email', validators=[DataRequired(), user_exists])
    # password = StringField('password', validators=[DataRequired()])
    first_name = StringField('first name', validators=[DataRequired()])
    last_name = StringField('last name', validators=[DataRequired()])
    pronouns = StringField('pronouns', validators=[])
    session_price = IntegerField('session price')
    travel_price = IntegerField('travel price')
    about_me = TextAreaField('about me')
    session_info = TextAreaField('session info')
    location = TextAreaField('location')
