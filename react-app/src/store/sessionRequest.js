// constants



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
  const data = await response.json()
  // dispatch(setSomethingSomehow(data))
}