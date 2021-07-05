import React, { useEffect, useRef } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getCuddlist } from "../../store/cuddlist";

const CuddlistProfile = () => {
  const dispatch = useDispatch();

  const {id} = useParams()
  console.log(id)
  // dispatch(getCuddlist(id))

  const cuddlist = useSelector(state => state.cuddlist.current)
  // const cuddlist = useSelector(state => state.session.user)

  useEffect(() => {
    const data = dispatch(getCuddlist(id))
    console.log(data)
  }, [dispatch])


  console.log("-------------------about to go into the html --------")
  return (
    <>
      <div className='cuddlist__container'>
        <div className="cuddlist__container__img__book">
          <div className="cuddlist__image__carousel">

          </div>
          <div className="cuddlist__request_session">

          </div>
        </div>
        <div className="cuddlist__container__profile__info">
          <h2 className="cuddlist__name">{cuddlist.firstName}</h2>
          <p>Session Price: <span>{cuddlist.sessionPrice}</span></p>
          <p>Travel Price: <span>{cuddlist.travelPrice}</span></p>
          <p>{cuddlist.location}</p>
          <h3>About {cuddlist.firstName}</h3>
          <p className="cuddlist__about__me">{cuddlist.aboutMe}</p>
          <h3>Session Info</h3>
          <p className="cuddlist__session__info">{cuddlist.sessionInfo}</p>
        </div>
      </div>
    </>
  )
}

export default CuddlistProfile