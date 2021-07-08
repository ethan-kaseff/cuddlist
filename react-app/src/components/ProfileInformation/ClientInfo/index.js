import React, { useEffect } from "react";

const ClientInfo = ({context}) => {
  const { editPhoneNumber, setEditPhoneNumber,
    phoneNumber, setPhoneNumber} = context

  // Focus on input when it shows up
  useEffect(() => {
    const input = document.getElementById('input');
    if (input) {
      input.focus();
    }
  })

  return (
    <>
      <div>
        <label>Phone Number: </label>
        {!editPhoneNumber && <span onClick={() => setEditPhoneNumber(true)}>{phoneNumber} <i className="fas fa-edit fa-xs"></i></span>}
        {editPhoneNumber &&
          <input
            id='input'
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

export default ClientInfo
