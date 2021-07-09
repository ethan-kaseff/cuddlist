import React from 'react'

function SessionRequestCard({request}) {
  return (
    <div>
      <p>{JSON.stringify(request)}</p>
    </div>
  )
}

export default SessionRequestCard



// { "clientId": 1, "cuddlistId": 3, "form": { "get_out_of_it": "Touch please", "questions": "nope! ", "session_date": "2021-07-22", "session_length": 60, "why_session": "I want one" }, "id": 1 }