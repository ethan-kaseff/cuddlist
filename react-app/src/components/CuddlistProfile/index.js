import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";

const CuddlistProfile = () => {
  const {id} = useParams()
  const cuddlist = useSelector(state => state.cuddlist.current)

  useEffect(() => {
    dispatch(getCuddlist(id))
  })

  return (
    <>
      <div className='cuddlist__container'>
      </div>
    </>
  )
}

export default CuddlistProfile