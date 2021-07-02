from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, User, Cuddlist, Client
from app.forms import UserForm

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>', methods=['PUT', 'DELETE'])
# @login_required
    user = User.query.get(id)

    if user.type == 'cuddlists':
        form = UserForm()

        client_cuddlist = Cuddlist.query.get(id)
        print(client_cuddlist)

        client_cuddlist.session_price = form.data['session_price']
        client_cuddlist.travel_price = form.data['travel_price']
        client_cuddlist.about_me = form.data['about_me']
        client_cuddlist.session_info = form.data['session_info']
        client_cuddlist.location = form.data['location']

    else:
        form = UserForm()

        client_cuddlist = Client.query.get(id)

        client_cuddlist.phone_number = form.data['phone_number']

    client_cuddlist.first_name = form.data['first_name']
    client_cuddlist.last_name = form.data['last_name']
    client_cuddlist.pronouns = form.data['pronouns']

    if request.method == 'DELETE':
        db.session.delete(client_cuddlist)

    db.session.commit()

    return client_cuddlist.to_dict()


@user_routes.route('/<int:id>')
# @login_required
def getProfile(id):
    user = User.query.get(id)

    if user.type == "cuddlists":
        cuddlist = Cuddlist.query.get(id)
        return cuddlist.to_dict()
    else:
        client = Client.query.get(id)
        return client.to_dict()
