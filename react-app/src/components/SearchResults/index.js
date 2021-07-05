import React from 'react'
import {useSelector} from 'react-redux'
import CuddlistCard from '../CuddlistCard'

function SearchResults() {
  const availableCuddlists = useSelector(state => state.cuddlist.availableCuddlists)



  return (
    <div className='cuddlist__results__container'>
      {
        availableCuddlists.map( cuddlist => {
          <CuddlistCard cuddlist={cuddlist} /> 
        })
      }
    </div>
  )
}

export default SearchResults
