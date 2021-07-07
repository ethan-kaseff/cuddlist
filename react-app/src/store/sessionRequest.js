// constants

// action creators

// thunks 

export const createSessionRequest = (
  clientId,
  cuddlistId,
  sessionLength, 
  sessionDate,
  whySession,
  getOutOfIt,
  questions
) => async(dispatch) => {
  const response = await fetch("/api/session-requests/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client_id: clientId,
      cuddlist_id: cuddlistId,
      session_length: sessionLength,
      session_date: sessionDate,
      why_session: whySession,
      get_out_of_it: getOutOfIt,
      questions,
    }),
  });
  // const data = 
  await response.json()
  // dispatch(setSomethingSomehow(data))
}


// reducer 

const initialState = {sessionRequests: {}}

export default function reducer(state=initialState, action) {
  switch(action.type) {
    default:
      return state
  }
}