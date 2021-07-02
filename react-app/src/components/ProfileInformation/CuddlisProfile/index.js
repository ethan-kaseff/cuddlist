import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setUpdateUser } from '../../../store/session'

const CuddlistProfile = ({context}) => {
  const {
    editSessionPrice, setEditSessionPrice,
    editTravelPrice, setEditTravelPrice,
    editLocation, setEditLocation,
    editAboutMe, setEditAboutMe,
    editSessionInfo, setEditSessionInfo,
    sessionPrice, setSessionPrice,
    travelPrice, setTravelPrice,
    location, setLocation,
    aboutMe, setAboutMe,
    sessionInfo, setSessionInfo} = context

  const dispatch = useDispatch();

  const user = useSelector(state => state.session.user);
  const updateUser = useSelector(state => state.session.updateUser);

  // // Boolean values to track what we are editing
  // const [editSessionPrice, setEditSessionPrice] = useState(false);
  // const [editTravelPrice, setEditTravelPrice] = useState(false);
  // const [editLocation, setEditLocation] = useState(false);
  // const [editAboutMe, setEditAboutMe] = useState(false);
  // const [editSessionInfo, setEditSessionInfo] = useState(false);

  // // Field values to keep in local state
  // const [sessionPrice, setSessionPrice] = useState(user.session_price);
  // const [travelPrice, setTravelPrice] = useState(user.travel_price);
  // const [location, setLocation] = useState(user.location);
  // const [aboutMe, setAboutMe] = useState(user.about_me);
  // const [sessionInfo, setSessionInfo] = useState(user.session_info);

  // Focus on input when it shows up
  useEffect(() => {
    const input = document.getElementById('input');
    if (input) {
      input.focus();
    }
  })

  // Update store for each keystroke in each field 
  useEffect(() => {
    updateUser.session_price = sessionPrice;
    updateUser.travel_price = travelPrice;
    updateUser.location = location;
    updateUser.about_me = aboutMe;
    updateUser.session_info = sessionInfo;
    dispatch(setUpdateUser(updateUser))
  }, [sessionPrice, travelPrice, location, aboutMe, sessionInfo])


  return (
    <>
      <div>
        <label>Session Price: </label>
        {!editSessionPrice && <span onClick={() => setEditSessionPrice(true)}>{user.session_price} <i className="fas fa-edit fa-xs"></i></span>}
        {editSessionPrice &&
          <input
            id='input'
            autofocus
            type='text'
            name='sessionPriceUpdate'
            onChange={(e) => setSessionPrice(e.target.value)}
            value={sessionPrice}
            onBlur={() => setEditSessionPrice(false)}
          ></input>
        }
      </div>
      <div>
        <label>Travel Price: </label>
        {!editTravelPrice && <span onClick={() => setEditTravelPrice(true)}>{user.travel_price} <i className="fas fa-edit fa-xs"></i></span>}
        {editTravelPrice &&
          <input
            id='input'
            type='text'
            name='sessionPriceUpdate'
            onChange={(e) => setTravelPrice(e.target.value)}
            value={travelPrice}
            onBlur={() => setEditTravelPrice(false)}
          ></input>
        }
      </div>
      <div>
        <label>Location: </label>
        {!editLocation && <span onClick={() => setEditLocation(true)}>{user.location} <i className="fas fa-edit fa-xs"></i></span>}
        {editLocation &&
          <input
            id='input'
            type='text'
            name='pronounsUpdate'
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            onBlur={() => setEditLocation(false)}
          ></input>
        }
      </div>
      <div>
        <label>About Me: </label>
        {!editAboutMe && <span onClick={() => setEditAboutMe(true)}>{user.about_me} <i className="fas fa-edit fa-xs"></i></span>}
        {editAboutMe &&
          <input
            id='input'
            autofocus
            type='text'
            name='firstNameUpdate'
            onChange={(e) => setAboutMe(e.target.value)}
            value={aboutMe}
            onBlur={() => setEditAboutMe(false)}
          ></input>
        }
      </div>
      <div>
        <label>Session Info: </label>
        {!editSessionInfo && <span onClick={() => setEditSessionInfo(true)}>{user.session_info || 'click here to add session info'} <i className="fas fa-edit fa-xs"></i></span>}
        {editSessionInfo &&
          <input
            id='input'
            type='text'
            name='lastNameUpdate'
            onChange={(e) => setSessionInfo(e.target.value)}
            value={sessionInfo}
            onBlur={() => setEditSessionInfo(false)}
          ></input>
        }
      </div>
    </>
  )
}

export default CuddlistProfile
