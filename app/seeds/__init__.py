from flask.cli import AppGroup
from .users import seed_users, undo_users
from .session_requests import seed_session_requests, undo_session_requests

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_session_requests()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_session_requests()
    undo_users()
    # Add other undo functions here
