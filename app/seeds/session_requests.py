from app.models import db, SessionRequest


def seed_session_requests(): 

    request1 = SessionRequest(
        client_id=1,
        cuddlist_id=3,
        form={
            'session_length': 60,
            'session_date': '2021-01-04',
            'why_session': 'I want to get as much touch as I can in life',
            'get_out_of_it': 'To feel loved and the feeling of being held',
            'questions': 'Should I bring a pillow? I am nervousa nd want to make sure that I am prepared'
        }
    )

    request2 = SessionRequest(
        client_id=1,
        cuddlist_id=3,
        form={
            'session_length': 90,
            'session_date': '2021-05-02',
            'why_session': 'A friend told me about it and I think that it could be really good for me',
            'get_out_of_it': 'I want to do some practicing asking for what I want. It has been hard for me and I definitely need the practice.',
            'questions': 'I do not have any questions, but I am excited!'
        }
    )

    request3 = SessionRequest(
        client_id=2,
        cuddlist_id=4,
        form={
            'session_length': 120,
            'session_date': '2021-07-08',
            'why_session': 'A friend told me about it and I think that it could be really good for me',
            'get_out_of_it': 'I want to do some practicing asking for what I want. It has been hard for me and I definitely need the practice.',
            'questions': 'I do not have any questions, but I am excited!'
        }
    )

    db.session.add(request1)
    db.session.add(request2)
    db.session.add(request3)

    db.session.commit()


def undo_session_requests():
    db.session.execute('TRUNCATE session_requests RESTART IDENTITY CASCADE;')
    db.session.commit()
