import React, {useState} from "react";
import {useSelector} from 'react-redux';

const ProfilePage = () => {
  const user = useSelector(state => state.session.user);

  return (
    <>
      <div>
        <label>Name</label>
        <p>{user.firstName}</p>
      </div>
      <div>
        <label>something</label>
        <p>{user.email}</p>
      </div>
    </>
  )
}

export default ProfilePage
