import React, { useState} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {createSessionRequest} from '../../store/sessionRequest'

function SessionRequest() {
  const dispatch = useDispatch()
  const {cuddlistId} = useParams()
  const client = useSelector(state => state.session.user)

  const [sessionLength, setSessionLength] = useState(0)
  const [sessionDate, setsessionDate] = useState('')
  const [whySession, setWhySession] = useState('')
  const [getOutOfIt, setGetOutOfIt] = useState('')
  const [questions, setQuestions] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createSessionRequest(
      client.id,
      cuddlistId,
      sessionLength,
      sessionDate,
      whySession,
      getOutOfIt,
      questions
    ))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="session-length">Session Length:  </label>
        <input 
          type="number" 
          name="session-length" 
          value={sessionLength}
          onChange={(e) => setSessionLength(e.target.value)}
          />
      </div>
      <div>
        <label htmlFor="session-date">Session Date:  </label>
        <input 
          type="date" 
          name="session-date"
          value={sessionDate}
          onChange={(e) => setsessionDate(e.target.value)}
          />
      </div>
      <div>
        <label htmlFor="why-session">Why are you interested in a session?:  </label>
        <textarea 
          // type="textarea" 
          name='why-session' 
          value={whySession}
          onChange={(e) => setWhySession(e.target.value)}
          />
      </div>
      <div>
        <label htmlFor="get-out-of-it">What would you like to get out of a session?:  </label>
        <textarea 
          // type="textarea" 
          name='get-out-of-it'
          value={getOutOfIt}
          onChange={(e) => setGetOutOfIt(e.target.value)}
          />
      </div>
      <div>
        <label htmlFor="questions">Do you have any questions for your Cuddlist?:  </label>
        <textarea 
          // type="textarea" 
          name='questions'
          value={questions}
          onChange={(e) => setQuestions(e.target.value)}
          />
      </div>
      <button type='submit'>Want a session?</button>
    </form>
  )
}

export default SessionRequest