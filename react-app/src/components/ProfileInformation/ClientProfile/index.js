import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setUpdateUser } from '../../../store/session'

const ClientProfile = () => {
  const dispatch = useDispatch();

  const user = useSelector(state => state.session.user);
  const updateUser = useSelector(state => state.session.updateUser);

  // Boolean values to track what we are editing
  const [editPhoneNumber, setEditPhoneNumber] = useState(false);

  // Field values to keep in local state
  const [phoneNumber, setPhoneNumber] = useState(user.phone_number);

  // Focus on input when it shows up
  useEffect(() => {
    const input = document.getElementById('input');
    if (input) {
      input.focus();
    }
  })

  // Update store for each keystroke in each field 
  useEffect(() => {
    updateUser.phone_number = phoneNumber;
    dispatch(setUpdateUser(updateUser))
  }, [phoneNumber])

  return (
    <>
      <div>
        <label>Phone Number: </label>
        {!editPhoneNumber && <span onClick={() => setEditPhoneNumber(true)}>{user.phone_number} <i className="fas fa-edit fa-xs"></i></span>}
        {editPhoneNumber &&
          <input
            id='input'
            autofocus
            type='text'
            name='phoneNumberUpdate'
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
            onBlur={() => setEditPhoneNumber(false)}
          ></input>
        }
      </div>
    </>
  )
}

export default ClientProfile
