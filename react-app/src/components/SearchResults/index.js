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
  },[dispatch])

  // const availableCuddlistsArr = []

  // useEffect(() => {
  //   for (const key in availableCuddlists) {
  //     console.log(key, 'are they there?', availableCuddlists[key])
  //     availableCuddlistsArr.push(availableCuddlists[key]);
  //   }

  //   // availableCuddlists.cuddlists[0].foreach(cuddlist => {
  //   //   console.log(cuddlist)
  //   // })
  //   console.log(availableCuddlists)
  //   console.log('arrrRRRRRRRRRRRRRRRRRRRRay ', availableCuddlistsArr)
  //   if (availableCuddlistsArr.length > 0) {

  //     availableCuddlistsArr.forEach(cuddlist => console.log('cuddlist', cuddlist.aboutMe))
  //   }
  //   // console.log('length of arr', availableCuddlistsArr.length())
  //   console.log(typeof(availableCuddlistsArr))
  // },[])

  // const joke = [
  //   {
  //     firstName: 'Ethan',
  //   },
  //   {
  //     firstName: 'Jacob'
  //   }
  // ]

  // console.log('right before retrun', availableCuddlistsArr)

  return (
    <div className='cuddlist__results__container'>
      <p>hello? </p>
      {
        availableCuddlists.map((cuddlist) => {
          return (
            <div className='card'>
              <p>something</p>
              {/* <CuddlistCard cuddlist={cuddlist} /> */}
              <p>{cuddlist.firstName}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default SearchResults
