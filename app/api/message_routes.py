from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Message
from app.forms import MessageForm

message_routes = Blueprint('messages', __name__)


@message_routes.route('/create', methods=['POST'])
def createMessage():
    form = MessageForm()

    message = Message(
        sender_id=form.data['sender_id'],
        chat_room_id=form.data['chat_room_id'],
        content=form.data['content'],
        time=form.data['time']
    )

    db.session.add(message)
    db.session.commit()

    return message.to_dict()
