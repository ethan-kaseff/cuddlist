import React from 'react'
import { useParams } from 'react-router-dom'

function SessionRequest() {
  const id = useParams()

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:  </label>
        <input type="text" className="name" />
      </div>
      <div>
        <label htmlFor="q1">Why are you interested in a session?:  </label>
        <input type="text" className="q1" />
      </div>
      <button type='submit'></button>
    </form>
  )
}

export default SessionRequest