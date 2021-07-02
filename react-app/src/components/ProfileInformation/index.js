import React, {useState} from "react";
import {useSelector} from 'react-redux';
import CuddlistProfile from "./CuddlisProfile";

const ProfileInformation = () => {
  const user = useSelector(state => state.session.user);

  return (
    <>
      <div>
        <label>First Name: </label>
        <span>{user.first_name}</span>
      </div>
      <div>
        <label>Last Name: </label>
        <span>{user.last_name}</span>
      </div>
      <div>
        <label>Pronouns: </label>
        <span>{user.pronouns}</span>
      </div>
      {user.session_price && <CuddlistProfile />}
      
    </>
  )
}

export default ProfileInformation
