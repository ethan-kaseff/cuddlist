from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField
from wtforms.validators import DataRequired


class MessageForm(FlaskForm):
    sender_id = IntegerField('sender id', validators=[DataRequired()])
    chat_room_id = IntegerField('chat room id', validators=[DataRequired()])
    content = TextAreaField('content', validators=[DataRequired()])
    time = StringField('time', validators=[DataRequired()])