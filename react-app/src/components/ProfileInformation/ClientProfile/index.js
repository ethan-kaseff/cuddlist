import React, { useState } from "react";
import { useSelector } from 'react-redux';

const ClientProfile = () => {
  const user = useSelector(state => state.session.user);

  return (
    <>
      <div>
        <label>Phone Number: </label>
        <span>{user.phone_number}</span>
      </div>
    </>
  )
}

export default ClientProfile
