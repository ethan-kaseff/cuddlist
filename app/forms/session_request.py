from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField
from wtforms.validators import DataRequired


class SessionRequestForm(FlaskForm):
    client_id = IntegerField('client id', validators=[DataRequired()])
    cuddlist_id = IntegerField('cuddlist id', validators=[DataRequired()])
    session_length = IntegerField('date', validators=[DataRequired()])
    session_date = StringField('date', validators=[DataRequired()])
    why_session = TextAreaField('why session', validators=[DataRequired()])
    get_out_of_it = TextAreaField('get out of it', validators=[DataRequired()])
    questions = TextAreaField('questions', validators=[DataRequired()])
