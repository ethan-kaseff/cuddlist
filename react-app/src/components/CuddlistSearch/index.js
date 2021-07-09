import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { getCuddlistLocations } from '../../store/cuddlist'

function CuddlistSearch() {
  const dispatch = useDispatch();
  const history = useHistory();
  const locations = useSelector(state => state.cuddlist.locations)
  const [location, setLocation] = useState('')


  useEffect(() => {
    dispatch(getCuddlistLocations())
  }, [dispatch])

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search-results/${location}`);
  }

  // used open source project Tailwind Templates for guidance and styling
  return (
    <div className='p-7 bg-white flex flex-row items-center rounded-full shadow-xl w-2/5 min-w-min'>
      <form onSubmit={handleSubmit} className="flex w-full justify-around">
        <select 
          name="cuddlist__location" 
          className="rounded-1-full" 
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          >
            <option default>Pick a Location...</option>
          {
            Object.keys(locations).map( location => {
              return <option key={location} value={location}>{location}</option>
            })
          }
        </select>
        <button className='bg-blue-300 text-white rounded-full hover:bg-blue-400 focus:outline-none w-12 h-12'>
          <i class="fas fa-search fa-lg"></i>
        </button>
      </form>
    </div>
  )
}

export default CuddlistSearch
