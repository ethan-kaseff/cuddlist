import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import CuddlistProfile from "./CuddlisProfile";
import ClientProfile from "./ClientProfile";
import {updateUserDb} from '../../store/session'

const ProfileInformation = () => {
  const dispatch = useDispatch();

  const user = useSelector(state => state.session.user);
  const updateUser = useSelector(state => state.session.updateUser);;

  // useEffect(() => {
  //    updateUser = useSelector(state => state.session.updateUser);
  // })

  const error = { firstName: 'bad first name'}

  // Boolean values to track what we are editing
  // User
  const [editFirstName, setEditFirstName] = useState(false);
  const [editLastName, setEditLastName] = useState(false);
  const [editPronouns, setEditPronouns] = useState(false);
  // Cuddlist 
  const [editSessionPrice, setEditSessionPrice] = useState(false);
  const [editTravelPrice, setEditTravelPrice] = useState(false);
  const [editLocation, setEditLocation] = useState(false);
  const [editAboutMe, setEditAboutMe] = useState(false);
  const [editSessionInfo, setEditSessionInfo] = useState(false);
  // Client
  const [editPhoneNumber, setEditPhoneNumber] = useState(false);

  // Field values to keep in local state
  // User
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [pronouns, setPronouns] = useState(user.pronouns);
  // Cuddlist
  const [sessionPrice, setSessionPrice] = useState(user.session_price);
  const [travelPrice, setTravelPrice] = useState(user.travel_price);
  const [location, setLocation] = useState(user.location);
  const [aboutMe, setAboutMe] = useState(user.about_me);
  const [sessionInfo, setSessionInfo] = useState(user.session_info);
  // Client
  const [phoneNumber, setPhoneNumber] = useState(user.phone_number);

  const cuddlistContext = {
    editSessionPrice, setEditSessionPrice,
    editTravelPrice, setEditTravelPrice,
    editLocation, setEditLocation,
    editAboutMe, setEditAboutMe,
    editSessionInfo, setEditSessionInfo,
    sessionPrice, setSessionPrice,
    travelPrice, setTravelPrice, 
    location, setLocation,
    aboutMe, setAboutMe,
    sessionInfo, setSessionInfo
  }

  const clientContext = {
    editPhoneNumber, setEditPhoneNumber,
    phoneNumber, setPhoneNumber
  }


  // Focus on input when it shows up
  useEffect(() => {
    const input = document.getElementById('input');
    if (input) {
      input.focus();
    }
  })

  // Update store for each keystroke in each field 
  const isOnlySpaces = (string) => {
    if (!string.replace(/\s/g, '').length) {

    }
  }

  // useEffect(() => {
  //   if (!firstName.length == 0 && firstName.trim()) {
  //     updateUser.first_name = firstName;

  //   }
  //   console.log(firstName.trim())
  //   updateUser.last_name = lastName;
  //   updateUser.pronouns = pronouns;
  //   dispatch(setUpdateUser(updateUser))
  // }, [firstName, lastName, pronouns])

  const handleSubmit = () => {
    if (user.session_price) {
      dispatch(updateUserDb(user.id,
                            firstName, 
                            lastName, 
                            pronouns, 
                            location, 
                            sessionPrice, 
                            travelPrice,
                            aboutMe,
                            sessionInfo))
    }
    else {
      dispatch(updateUserDb(user.id,
                            firstName,
                            lastName,
                            pronouns,
                            phoneNumber))
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          {
            error.firstName
          }
        </div>
        <div>
          <label>First Name: </label>
          {!editFirstName && <span onClick={() => setEditFirstName(true)}>{firstName} <i className="fas fa-edit fa-xs"></i></span>}
          {editFirstName && 
            <input
              id='input'
              autofocus
              type='text'
              name='firstNameUpdate'
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              onBlur={() => setEditFirstName(false)}
            ></input>
          }
        </div>
        <div>
          <label>Last Name: </label>
          {!editLastName && <span onClick={() => setEditLastName(true)}>{lastName} <i className="fas fa-edit fa-xs"></i></span>}
          {editLastName &&
            <input
              id='input'
              type='text'
              name='lastNameUpdate'
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              onBlur={() => setEditLastName(false)}
            ></input>
          }
        </div>
        <div>
          <label>Pronouns: </label>
          {!editPronouns && <span onClick={() => setEditPronouns(true)}>{pronouns} <i className="fas fa-edit fa-xs"></i></span>}
          {editPronouns &&
            <>
              <input
                id='input'
                type='text'
                name='pronounsUpdate'
                onChange={(e) => setPronouns(e.target.value)}
                value={pronouns}
                onBlur={() => setEditPronouns(false)}
              ></input>
              <i className="fas fa-sync-alt"></i>
            </>
          }
        </div>
        {user.session_price && <CuddlistProfile context={cuddlistContext}/>}
        {!user.session_price && <ClientProfile context={clientContext}/>}
        <button type='submit'>Save</button>
      </form>
    </>
  )
}

export default ProfileInformation
