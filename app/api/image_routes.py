from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Image, Cuddlist
from app.forms import ImageForm
from app.s3_helpers import (
    upload_file_to_s3, allowed_file, get_unique_filename)

image_routes = Blueprint('images', __name__)


@image_routes.route('', methods=['POST'])
def upload_image():
    if "image" not in request.files:
        return {"errors": "image required"}, 400

    image = request.files["image"]

    if not allowed_file(image.filename):
        return {"errors": "file type not permitted"}, 400

    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)

    if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400

    url = upload["url"]
    # flask_login allows us to get the current user from the request
    new_image = Image(cuddlist_id=current_user.id, image_url=url)
    db.session.add(new_image)
    db.session.commit()

    cuddlist = Cuddlist.query.filter(Cuddlist.id == current_user.id).one()
    # return {"url": url}
    return cuddlist.to_dict()


@image_routes.route('/<int:id>/', methods=['DELETE'])
def delete_image(id):
    image = Image.query.filter(Image.id == id).one()
    cuddlist = Cuddlist.query.get(image.cuddlist_id)
    Image.query.filter(Image.id == id).delete()
    db.session.commit()
    # return {"Success": "Image Deleted"}
    return cuddlist.to_dict()
