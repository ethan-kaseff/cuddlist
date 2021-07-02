import React, {useEffect, useState} from "react";
import {useSelector} from 'react-redux';
import CuddlistProfile from "./CuddlisProfile";
import ClientProfile from "./ClientProfile";

const ProfileInformation = () => {
  const user = useSelector(state => state.session.user);
  const [editFirstName, setEditFirstName] = useState(false);
  const [editLastName, setEditLastName] = useState(false);
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);

  useEffect(() => {
    // setFirstName(true);
    const input = document.getElementById('input');
    if (input) {
      input.focus();
    }
  })

  return (
    <>
      <div>
        <label>First Name: </label>
        {!editFirstName && <span onClick={() => setEditFirstName(true)}>{user.first_name}</span>}
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
        {!editLastName && <span onClick={() => setEditLastName(true)}>{user.last_name}</span>}
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
        <span>{user.pronouns}</span>
      </div>
      {user.session_price && <CuddlistProfile />}
      {!user.session_price && <ClientProfile />}
    </>
  )
}

export default ProfileInformation
