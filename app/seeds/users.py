from werkzeug.security import generate_password_hash
from app.models import db, Client, Cuddlist


# Adds a demo user, you can add other users here if you want
def seed_users():

    client1 = Client(email='client1@client.com',
                     password='password',
                     first_name='Stephen',
                     last_name='Kaplan')
    client2 = Client(email='client2@client.com',
                     password='password',
                     first_name='Stacey',
                     last_name='Woodruff')
    cuddlist1 = Cuddlist(email='cuddlist1@cuddlist.com',
                         password='password',
                         first_name='Ethan',
                         last_name='Kaseff',
                         location='Kansas City',
                         session_price=80,
                         about_me="As a certified professional cuddler, I am committed to cuddling as a valuable healing practice for individuals ranging from those in need of a hug and those looking for an engagement with their world of confusing and discouraging physical experiences, to those who have spent immense time void of physical contact as well as sexual assault victims. We live in a world full of people. So many things can distance us from those people such as technology, traveling, and jobs. We can currently keep in touch and connect deeply with a number of people previously unknown. Sometimes, though, we can forget that the people we want to connect with are real. They are physical and beautiful humans that we can touch, and feel and hold. It is for these reasons and more that I found my way into the world of cuddling. I believe it to be more than a wonderful past time, and more than a valuable healing modality for individuals searching for touch and personal growth and healing through touch. Ultimately, I believe professional cuddling to be a part of a grand reclamation of an integral and seemingly lost part of the human experience the joy of consensual touch.",
                         session_info="In my sessions, I am committed to mutual and consensual interactions with verbal agreements on both sides. Cuddling can be an incredibly healing and growth initiating activity and that is something that I hope you can experience in my sessions. I work with clients to express their wants and needs, offering a place to explore the self, for value in the session and out.")
    cuddlist2 = Cuddlist(email='cuddlist2@cuddlist.com',
                         password='password',
                         first_name='Madelon',
                         last_name='Guinazzo',
                         location='Kansas City',
                         session_price=80,
                         about_me='Madelon’s life mission is to discover, practice and share continually more effective ways of putting love into action. She is dedicated to the inalienable right to express love in the way we choose to and her work is about bringing greater awareness to this choice in each moment. Madelon works steadily as a professional cuddler and is a pioneer in this emerging field. She is the Co-Founder of Cuddlist and the creator and Director of the Cuddlist certification training program and co-creator of the Cuddlists Advanced Training. She is a certified Cuddle Party facilitator and trainer as well as a member of their board of director’s. She facilitates Foundations of Facilitation workshops for Cuddle Party around the country and has conducted workshops on consent for undergraduates at Columbia College in Chicago.',
                         session_info='When I receive your request I celebrate the leap you are taking in exploring new ways to meet your valid human need for healthy connection! I generally respond by text within 24 hours with more information about how to move forward. When in person I conduct my sessions on my (huge!) cuddle couch. Candles , music (your artist requests or preference for silence are welcomed), soothing videos (nature images and crackling fireplaces ae popular) and aromatherapy are all available. We begin by creating a comfortable consensual communication agreement and allow individual preferences to guide us from there. In addition to cuddling I focus on empowering my clients to identify and speak their wants and needs. Cuddling can be cozy personal growth work! My goal is always to support you in the next step toward more satisfying connections in the rest of your life-especially with yourself.')
    cuddlist3 = Cuddlist(email='cuddlist3@cuddlist.com',
                         password='password',
                         first_name='Yoni',
                         last_name='Alkan',
                         location='San Francisco',
                         session_price=160,
                         about_me='Yoni creates an island of calmness away from the bustling world. A perfect combination of attentive touch and a good listener, mixed with a good dose of relaxation. Yoni has a Doctorate in Human Sexuality, and a Masters in conflict resolution. He is a Certified Cuddle Party Facilitator, and author of http: // www.thebookofcuddles.com . In his past, he also taught dance and played music for over two decades. Having so many different perspectives makes him a very talented before-during-and-after-care-giver: While his soft and gentle touch can be soothing and comforting, he is also quite the conversation buddy and can really hold space for anyone in need.',
                         session_info='I am not taking on many new clients nowadays, but feel free to reach out and we can see what we can do. I can either come to your location or you are invited to join me at my cuddle space to enjoy each other’s company, conversation and intentional touch. The space is in the Richmond District in San Francisco. It is a no pets or smoking area, and alas it is not wheelchair accessible. Travel fees are wavered in respect of disabilities. Please let me know if you have any special needs or questions, and I’m looking forward to meeting you soon!')

    db.session.add(client1)
    db.session.add(client2)
    db.session.add(cuddlist1)
    db.session.add(cuddlist2)
    db.session.add(cuddlist3)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
