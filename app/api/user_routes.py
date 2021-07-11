from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from sqlalchemy import distinct
from app.models import cuddlist, db, User, Cuddlist, Client, user
from app.forms import UserForm

user_routes = Blueprint('users', __name__)


@user_routes.route('/<int:id>')
def getProfile(id):
    user = User.query.get(id)
    print(user)
    print('thats the user')
    
    if user.type == "cuddlists":
        cuddlist = Cuddlist.query.get(id)
        return cuddlist.to_dict()
    else:
        client = Client.query.get(id)
        print(client)
        return client.to_dict()


@user_routes.route('/<int:id>/', methods=['PUT'])
# @login_required
def updateUsers(id):
    user = User.query.get(id)

    if user.type == 'cuddlists':
        print('-----------------------printing client_cuddlist in route------------------')
        form = UserForm()
        client_cuddlist = Cuddlist.query.get(id)
        print('CUDDLIST', client_cuddlist)

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

    db.session.commit()

    return client_cuddlist.to_dict()


@user_routes.route('/<int:id>/', methods=['DELETE'])
# @login_required
def deleteUser(id):
    user = User.query.filter(User.id == id).delete()
    db.session.commit()

    return {"Success": 'User Deleted'}


@user_routes.route('/cuddlist-locations')
def cuddlistLocations():
    query = Cuddlist.query.with_entities(Cuddlist.location).distinct()
    locations = {row.location: row.location for row in query.all()
                 if row.location}
    # locations = [row.location for row in query.all()
    #              if row.location]
    # return {'locations': locations}
    return locations


@user_routes.route('/cuddlists/<string:location>')
def availableCuddlists(location):
    availableCuddlists = Cuddlist.query.filter(Cuddlist.location == location) \
                                               .all()
    return {"cuddlists": [cuddlist.to_dict() for cuddlist
                          in availableCuddlists]}

    # availableCuddlistsDict = {}
    # for cuddlist in availableCuddlists:
    #     availableCuddlists[cuddlist.id] = cuddlist.to_dict()

    # return availableCuddlistsDict


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}
