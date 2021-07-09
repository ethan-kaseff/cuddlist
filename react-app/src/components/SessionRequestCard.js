import React from 'react'
import {useSelector} from 'react-redux'

function SessionRequestCard({request}) {
  const user = useSelector(state => state.session.user)

  return (
    <div className='p-4'>
      <div className="shadow-xl rounded-lg bg-blue-200 p-3">
        <table className='table-fixed'>
          <tbody>
            <tr>
              <td className='w-4/12'>
                {user.type == 'clients' && 'Cuddlist Name:'}
                {user.type == 'cuddlists' && 'Client Name:'}
              </td>
              <td className='w-8/12 pl-2'>
                {user.type == 'clients' && request.cuddler.firstName + ' ' + request.cuddler.lastName}
                {user.type == 'cuddlists' && request.client.firstName + ' ' + request.client.lastName}
              </td>
            </tr>
            <tr>
              <td>Session Length:</td>
              <td>{request.sessionLength}</td>
            </tr>
          </tbody>
        </table>
      </div>
        <p>{JSON.stringify(request)}</p>
    </div>
  )
}

export default SessionRequestCard



// { "clientId": 1, "cuddlistId": 3, "form": { "get_out_of_it": "Touch please", "questions": "nope! ", "session_date": "2021-07-22", "session_length": 60, "why_session": "I want one" }, "id": 1 }