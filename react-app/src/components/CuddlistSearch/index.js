import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAvailableCuddlists, getCuddlistLocations } from '../../store/cuddlist'

function CuddlistSearch() {
  const dispatch = useDispatch();
  const locations = useSelector(state => state.cuddlist.locations)

  const [location, setLocation] = useState('')


  useEffect(() => {
    dispatch(getCuddlistLocations())
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('location in handleSubmit', location)
    dispatch(getAvailableCuddlists(location))
  }

  return (
    <div>
      <p>form</p>
      <form onSubmit={handleSubmit} className="cuddlist__search">
        <select 
          name="cuddlist__location" 
          className="cuddlist__location__select" 
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          >
            <option default>Pick a Location...</option>
          {
            Object.keys(locations).map( location => {
              return <option value={location}>{location}</option>
            })
          }
        </select>
        <button>Click me!</button>
      </form>
    </div>
  )
}

export default CuddlistSearch
