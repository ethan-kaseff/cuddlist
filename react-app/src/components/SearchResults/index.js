import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useParams } from 'react-router-dom';
import CuddlistCard from './CuddlistCard'
import { getAvailableCuddlists } from '../../store/cuddlist';

function SearchResults() {
  const dispatch = useDispatch();
  const availableCuddlists = useSelector(state => Object.values(state.cuddlist.availableCuddlists))
  const {location} = useParams();

  useEffect(() =>  {
    dispatch(getAvailableCuddlists(location));
  },[dispatch, location])

  return (
    <div className='flex flex-col'>
      <h2
        className="text-blue-600 text-4xl font-regular mb-3 mt-4 text-center">
        Cuddlists in your area</h2>
      {
        availableCuddlists.map((cuddlist) => {
          return (
            <div className='flex justify-center' key={cuddlist.id}>
              <CuddlistCard cuddlist={cuddlist} />
            </div>
          )
        })
      }
    </div>
  )
}

export default SearchResults
