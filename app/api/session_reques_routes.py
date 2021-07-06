from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, User, Cuddlist, Client
from app.forms import UserForm

session_request_routes = Blueprint('requests', __name__)


@session_request_routes.route('/create-session-request', methods=['POST'])
def createSessionRequest():
    form 