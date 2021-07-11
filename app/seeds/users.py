from werkzeug.security import generate_password_hash
from app.models import db, Client, Cuddlist


# Adds a demo user, you can add other users here if you want
def seed_users():

    client1 = Client(email='client1@client.com',
                     password='password',
                     first_name='joe',
                     last_name='shmoe')
    client2 = Client(email='client2@client.com',
                     password='password',
                     first_name='jane',
                     last_name='woops')
    cuddlist1 = Cuddlist(email='cuddlist1@cuddlist.com',
                         password='password',
                         first_name='jack',
                         last_name='shmap',
                         session_price=80,
                         about_me='I am me and this is a big deal, \
                            you know that?')
    cuddlist2 = Cuddlist(email='cuddlist2@cuddlist.com',
                         password='password',
                         first_name='brack',
                         last_name='smaptsy',
                         session_price=80,
                         about_me='Here is the classi place to write about \
                            yourself!')

    db.session.add(client1)
    db.session.add(client2)
    db.session.add(cuddlist1)
    db.session.add(cuddlist2)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
