import React, {useState} from "react";
import {useSelector} from 'react-redux';

const ProfileInformation = () => {
  const user = useSelector(state => state.session.user);
  
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const userArr = []
  for (const field in user) {
    const labelArr = field.split(/(?=[A-Z])/);
    console.log()
    labelArr.map(word => {
      capitalizeFirstLetter(word)
    })
    let label = ''
    labelArr.forEach(word => {
      label += word
    })
    userArr.push([label, user[field]])
  }


  return (
    <>
      {
        userArr.map(arr => {
          return (
            <div>
              <label>{arr[0]}</label>
              <span>{arr[1]}</span>
            </div>
          )
        })
      }
      <div>
        <label>First Name</label>
        <span>{user.first_name}</span>
      </div>
      <div>
        <label>Last Name </label>
        <span>{user.last_name}</span>
      </div>
      <div>
        <label>Pronouns </label>
        <span>{user.pronouns}</span>
      </div>
    </>
  )
}

export default ProfileInformation
