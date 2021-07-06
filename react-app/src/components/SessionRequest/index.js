import React from 'react'
import { useParams } from 'react-router-dom'

function SessionRequest() {
  const id = useParams()

  const [sessionLength, setSessionLength] = useState(0)
  const [sessionDate, setsessionDate] = useState('')
  const [whySession, setWhySession] = useState('')
  const [getOutOfIt, setGetOutOfIt] = useState('')
  const [questions, setQuestions] = useState('initialState')

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="session-length">Session Length:  </label>
        <input 
          type="number" 
          name="session-length" 
          value={sessionLength}
          />
      </div>
      <div>
        <label htmlFor="session-date">Session Length:  </label>
        <input type="date" name="session-date" />
      </div>
      <div>
        <label htmlFor="why-session">Why are you interested in a session?:  </label>
        <input type="text" name='why-session' />
      </div>
      <div>
        <label htmlFor="get-out-of-it">What would you like to get out of a session?:  </label>
        <input type="text" name='get-out-of-it' />
      </div>
      <div>
        <label htmlFor="questions">Do you have any questions for your Cuddlist?:  </label>
        <input type="text" name='questions' />
      </div>
      <button type='submit'></button>
    </form>
  )
}

export default SessionRequest