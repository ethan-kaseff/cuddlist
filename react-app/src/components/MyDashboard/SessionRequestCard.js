import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {deleteSessionRequest} from './../../store/session'

function SessionRequestCard({request}) {
  const dispatch = useDispatch();

  const user = useSelector(state => state.session.user)

  const date = new Date(request.form.sessionDate)
  const formattedDate = date.toDateString()
  // debugger
  return (
    <div className='p-4 relative'>
      <div className="shadow-xl rounded-lg bg-blue-200 p-3">
        <table className='table-fixed'>
          <thead>
            <tr>
              <th className='w-4/12'></th>
              <th className='w-1/12'></th>
              <th className='w-7/12'></th>
            </tr>
          </thead>
          <tbody>
            <tr className='bg-blue-300 rounded-3xl'>
              <td>
                {user.type == 'clients' && 'Cuddlist Name:'}
                {user.type == 'cuddlists' && 'Client Name:'}
              </td>
              <td></td>
              <td>
                {user.type === 'clients' && (!request.cuddler === false ? request.cuddler.firstName + ' ' + request.cuddler.lastName : 'Cuddlist Profile Deleted')}
                {user.type === 'cuddlists' && (!request.client === false ? request.client.firstName + ' ' + request.client.lastName : 'Client Profile Deleted')}
              </td>
            </tr>
            <tr>
              <td>Session Length:</td>
              <td></td>
              <td>{request.form.sessionLength}</td>
            </tr>
            <tr className='bg-blue-300'>
              <td>Session Date:</td>
              <td></td>
              <td>{formattedDate}</td>
            </tr>
            <tr>
              <td>What would you like to get out of the session?:</td>
              <td></td>
              <td>{request.form.getOutOfIt}</td>
            </tr>
            <tr className='bg-blue-300 rounded-3xl m-1'>
              <td>Why are you interested in a cuddle session?:</td>
              <td></td>
              <td>{request.form.whySession}</td>
            </tr>
            <tr>
              <td>Do you have any questions for your cuddlist?:</td>
              <td></td>
              <td>{request.form.questions}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button
        onClick={() => dispatch(deleteSessionRequest(request.id, user.id))}
      >
        <div className={"absolute right-8 top-8 rounded-full bg-red-500 p-1 text-xs shadow w-6 h-6 "}><i className="fas fa-times text-white"></i></div>

      </button>
    </div>
  )
}

export default SessionRequestCard



// { "clientId": 1, "cuddlistId": 3, "form": { "get_out_of_it": "Touch please", "questions": "nope! ", "session_date": "2021-07-22", "session_length": 60, "why_session": "I want one" }, "id": 1 }