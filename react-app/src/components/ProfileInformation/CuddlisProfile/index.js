import React, { useState } from "react";
import { useSelector } from 'react-redux';

const CuddlistProfile = () => {
  const user = useSelector(state => state.session.user);

  return (
    <>
      <div>
        <label>Session Price: </label>
        <span>{user.session_price}</span>
      </div>
      <div>
        <label>Travel Price: </label>
        <span>{user.travel_price}</span>
      </div>
      <div>
        <label>Location: </label>
        <span>{user.location}</span>
      </div>
      <div>
        <label>About Me: </label>
        <span>{user.about_me}</span>
      </div>
      <div>
        <label>Session Info: </label>
        <span>{user.session_info}</span>
      </div>
    </>
  )
}

export default CuddlistProfile
