import React, { useState} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {createSessionRequest} from '../../../store/sessionRequest'

function SessionRequestForm({id, setShowModal}) {
  const dispatch = useDispatch()
  // const {cuddlistId} = useParams()
  const cuddlistId = id
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

    setShowModal(false)
  }
  
  // https://tailwindtemplates.io/forms/
  return (
    <div className='w-full max-w-lg'>
      <form onSubmit={handleSubmit} className='flex shadow-lg flex-col min-w-min p-8'>
        <div className="text-center text-blue-500 mb-5 font-bold text-2xl">
          Session Request Form
        </div>
        <div className='mb-4'>
          <label htmlFor="session-length"
            className=' text-gray-600 text-md font-semibold mb-2'
            >Session Length:  </label>
          <select 
            type="number" 
            name="session-length" 
            value={sessionLength}
            onChange={(e) => setSessionLength(e.target.value)}
            className='border-b m-auto mb-4 text-grey-400 p-2'
            >
              <option value={30}>30 minutes</option>
              <option value={60}>60 minutes</option>
              <option value={90}>90 minutes</option>
              <option value={120}>120 minutes</option>
          </select>
        </div >
        <div className='mb-4'>
          <label htmlFor="session-date"
            className=' text-gray-600 text-md font-semibold mb-2'
            >Session Date:  </label>
          <input 
            type="date" 
            name="session-date"
            value={sessionDate}
            onChange={(e) => setsessionDate(e.target.value)}
            className='border-b m-auto mb-4 text-grey-400 p-2'
            />
        </div>
        <div>
          <label htmlFor="why-session"
            className='block text-gray-600 text-md font-semibold mb-2'
            >Why are you interested in a session?:  </label>
          <textarea 
            // type="textarea" 
            name='why-session' 
            value={whySession}
            onChange={(e) => setWhySession(e.target.value)}
            className='border-b m-auto mb-4 text-grey-400 p-2 w-10/12'
            />
        </div>
        <div>
          <label htmlFor="get-out-of-it"
            className='block text-gray-600 text-md font-semibold mb-2'
            >What would you like to get out of a session?:  </label>
          <textarea 
            // type="textarea" 
            name='get-out-of-it'
            value={getOutOfIt}
            onChange={(e) => setGetOutOfIt(e.target.value)}
            className='border-b m-auto mb-4 text-grey-400 p-2 w-10/12'
            />
        </div>
        <div>
          <label htmlFor="questions"
            className='block text-gray-600 text-md font-semibold mb-2'
            >Do you have any questions for your Cuddlist?:  </label>
          <textarea 
            // type="textarea" 
            name='questions'
            value={questions}
            onChange={(e) => setQuestions(e.target.value)}
            className='border-b m-auto mb-4 text-grey-400 p-2 w-10/12'
            />
        </div>
        <div className='flex justify-center'>
          <button type='submit'
            className='bg-blue-400 hover:bg-blue-500 rounded-full shadow-lg text-white font-bold w-3/5 p-1 text-lg'
            >Want a session?</button>
        </div>
      </form>
    </div>
  )
}

export default SessionRequestForm