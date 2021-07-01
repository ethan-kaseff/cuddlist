from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Cuddlist
from app.forms import CuddlistForm

cuddlist_routes = Blueprint('cuddlists', __name__)


@cuddlist_routes.route('/<int:id>', methods=['POST', 'DELETE'])
# @login_required
def updateProfile(id):
    if request.method == 'POST':
        form = CuddlistForm()
        cuddlist = Cuddlist.query.get(id)

        cuddlist.first_name = form.data['first_name']
        cuddlist.last_name = form.data['last_name']
        cuddlist.pronouns = form.data['pronouns']
        cuddlist.session_price = form.data['session_price']
        cuddlist.travel_price = form.data['travel_price']
        cuddlist.about_me = form.data['about_me']
        cuddlist.session_info = form.data['session_info']
        cuddlist.location = form.data['location']

        db.session.commit()

    elif request.method == 'DELETE':
        cuddlist = Cuddlist.query.get(id)
        db.session.delete(cuddlist)
        db.session.commit()

    return cuddlist.to_dict()

