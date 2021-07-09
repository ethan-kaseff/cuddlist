from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, SessionRequest, Client, Cuddlist, User
from app.forms import ImageForm

image_routes = Blueprint('images', __name__)


@image_routes.route('/create', methods=['POST'])
def createMessage():
    form = ImageForm()

    image = SessionRequest(
        client_id=form.data['client_id'],
        url=form.data['url'],
    )

    db.session.add(image)
    db.session.commit()

    return image.to_dict()
