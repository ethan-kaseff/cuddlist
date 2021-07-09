import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { getCuddlistLocations } from '../../store/cuddlist'

function CuddlistSearch() {
  const dispatch = useDispatch();
  const history = useHistory();
  const locations = useSelector(state => state.cuddlist.locations)
  const [location, setLocation] = useState('')

  const [badLocation, setBadLocation] = useState('hidden')


  useEffect(() => {
    dispatch(getCuddlistLocations())
  }, [dispatch])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (badLocation == '') {
      setBadLocation('animate-bounce ease duration-1000')
    }
    else if (location[0] == undefined) {
      setBadLocation('')
    } else {
      history.push(`/search-results/${location}`);
    }
  }

  // used open source project Tailwind Templates for guidance and styling
  return (
    <div className='p-6 bg-white flex flex-row items-center rounded-full shadow-xl w-2/5 min-w-min max-w-md'>
      <form onSubmit={handleSubmit} className="flex w-full justify-around">
        <select 
          name="cuddlist__location" 
          className="rounded-1-full" 
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          >
            <option default value='bad'>Pick a Location...</option>
          {
            Object.keys(locations).map( location => {
              return <option key={location} value={location}>{location}</option>
            })
          }
        </select>
        <button className='bg-blue-300 text-white rounded-full hover:bg-blue-400 focus:outline-none w-12 h-12 relative'>
          <i className="fas fa-search fa-lg"></i>
          <div className={"absolute -right-16 top-0 -mt-2 -mr-2 rounded-full bg-red-500 p-1 text-xs shadow w-24 h-6 " + badLocation}>Use pulldown</div>
        </button>
      </form>
    </div>
  )
}

export default CuddlistSearch
