from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Image
from app.forms import ImageForm

image_routes = Blueprint('images', __name__)


@image_routes.route('/create', methods=['POST'])
def createMessage():
    form = ImageForm()

    image = Image(
        cuddlist_id=form.data['cuddlist_id'],
        image_url=form.data['image_url'],
    )

    db.session.add(image)
    db.session.commit()

    return image.to_dict()
