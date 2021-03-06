from flask import Blueprint, jsonify, request
from flask.globals import session
from flask_login import login_required, current_user
from app.models import db, SessionRequest, Client, Cuddlist, User
from app.forms import SessionRequestForm

session_request_routes = Blueprint('requests', __name__)


@session_request_routes.route('/create', methods=['POST'])
def createSessionRequest():
    form = SessionRequestForm()

    form_response = {
        "session_length": form.data['session_length'],
        "session_date": form.data['session_date'],
        "why_session": form.data['why_session'],
        "get_out_of_it": form.data['get_out_of_it'],
        "questions": form.data['questions']
    }

    request = SessionRequest(
        client_id=form.data['client_id'],
        cuddlist_id=form.data['cuddlist_id'],
        form=form_response
    )

    db.session.add(request)
    db.session.commit()

    return request.to_dict()


@session_request_routes.route('/<int:requestId>/<int:userId>/', methods=['DELETE'])
def delete_session_request(requestId, userId):
    # request = SessionRequest.query.filter(SessionRequest.id == requestId).one()
    user = User.query.filter(User.id == userId).one()
    SessionRequest.query.filter(SessionRequest.id == requestId).delete()
    # request.delete()
    db.session.commit()
    return user.to_dict()
