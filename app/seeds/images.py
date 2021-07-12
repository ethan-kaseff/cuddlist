from app.models import db, Image


def seed_images():

    image1 = Image(
        cuddlist_id=5,
        image_url='https://cuddlist.com/wp-content/uploads/2016/10/yoni-1.jpg'
    )

    image2 = Image(
        cuddlist_id=3,
        image_url='https://cuddlist.s3.amazonaws.com/1a97312ce16d48fd80b6d8c98b67d999.jpg'
    )

    image3 = Image(
        cuddlist_id=4,
        image_url='https://cuddlist.com/wp-content/uploads/2016/08/madelon01-12.jpg'
    )

    image4 = Image(
        cuddlist_id=6,
        image_url='https://cuddlist.com/wp-content/uploads/2016/09/AnnaJoy_Profile2.jpg'
    )

    db.session.add(image1)
    db.session.add(image2)
    db.session.add(image3)
    db.session.add(image4)

    db.session.commit()


def undo_images():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
