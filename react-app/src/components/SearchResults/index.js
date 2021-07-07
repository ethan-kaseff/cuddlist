import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useParams } from 'react-router-dom';
import CuddlistCard from '../CuddlistCard'
import { getAvailableCuddlists } from '../../store/cuddlist';

function SearchResults() {
  const dispatch = useDispatch();
  const availableCuddlists = useSelector(state => Object.values(state.cuddlist.availableCuddlists))
  const {location} = useParams();

  useEffect(() =>  {
    dispatch(getAvailableCuddlists(location));
  },[dispatch, location])

  return (
    <div className='cuddlist__results__container'>
      {
        availableCuddlists.map((cuddlist) => {
          return (
            <div key={cuddlist.id}>
              <CuddlistCard cuddlist={cuddlist} />
            </div>
          )
        })
      }
    </div>
  )
}

export default SearchResults
