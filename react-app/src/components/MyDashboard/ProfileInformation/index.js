import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import CuddlistInfo from "./CuddlistInfo";
import ClientInfo from "./ClientInfo";
import {updateUserDb} from '../../../store/session'

const ProfileInformation = () => {
  const dispatch = useDispatch();

  const user = useSelector(state => state.session.user);

  // useEffect(() => {
  //    updateUser = useSelector(state => state.session.updateUser);
  // })

  const error = { }

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
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [pronouns, setPronouns] = useState(user.pronouns ? user.pronouns : 'Pronouns');
  // Cuddlist
  const [sessionPrice, setSessionPrice] = useState(user.sessionPrice);
  const [travelPrice, setTravelPrice] = useState(user.travelPrice);
  const [location, setLocation] = useState(user.location);
  const [aboutMe, setAboutMe] = useState(user.aboutMe);
  const [sessionInfo, setSessionInfo] = useState(user.sessionInfo);
  // Client
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);

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

  const [buttonColor, setButtonColor] = useState('bg-gray-500')
  useEffect(() => {
    setButtonColor('bg-blue-700 hover:bg-blue-500')
  },[editFirstName,
     editLastName,
     editPronouns,
     editLocation,
     editTravelPrice,
     editSessionInfo,
     editSessionPrice,
     editAboutMe,
     editSessionInfo,
     editPhoneNumber])


  // Focus on input when it shows up
  useEffect(() => {
    const input = document.getElementById('input');
    if (input) {
      input.focus();
    }
    console.log()
  })

  // Update store for each keystroke in each field 
  // const validate = (string) => {
  //   if (!firstName.length == 0 && firstName.trim()) {
  //     updateUser.first_name = firstName;
  //   }
  // }



  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('in the handle funciton ')
    let userToSend = {}
    if (user.sessionPrice) {
      userToSend = {id: user.id,
              firstName, 
              lastName, 
              pronouns, 
              location, 
              sessionPrice, 
              travelPrice,
              aboutMe,
              sessionInfo}
    }
    else {
      userToSend = {id: user.id,
              firstName,
              lastName,
              pronouns,
              phoneNumber}
    }
    dispatch(updateUserDb(userToSend))
  }

  return (
    <>
      <div>
        {
          error.firstName
        }
      </div>
      <form onSubmit={handleSubmit}>
        <table className='table-fixed'>
          <tbody>

            <tr>
              <td className='w-1/4'>First Name</td>
              <td className='w-2/4'>
                <div>
                  {!editFirstName && <span onClick={() => setEditFirstName(true)}>{firstName} <i className="fas fa-edit fa-xs"></i></span>}
                  {editFirstName &&
                    <input
                      id='input'
                      type='text'
                      name='firstNameUpdate'
                      onChange={(e) => setFirstName(e.target.value)}
                      value={firstName}
                      placeholder='First Name'
                      onBlur={() => setEditFirstName(false)}
                    ></input>
                  }
                </div>
              </td>
            </tr>
            <tr>
              <td>Last Name</td>
              <td>
                <div>
                  {!editLastName && <span onClick={() => setEditLastName(true)}>{lastName} <i className="fas fa-edit fa-xs"></i></span>}
                  {editLastName &&
                    <input
                      id='input'
                      type='text'
                      name='lastNameUpdate'
                      onChange={(e) => setLastName(e.target.value)}
                      value={lastName}
                      placeholder='Last Name'
                      onBlur={() => setEditLastName(false)}
                    ></input>
                  }
                </div>
              </td>
            </tr>
            <tr>
              <td>Pronouns</td>
              <td>
                <div>
                  {!editPronouns && <span onClick={() => setEditPronouns(true)}>{pronouns} <i className="fas fa-edit fa-xs"></i></span>}
                  {editPronouns &&
                    <>
                      <input
                        id='input'
                        type='text'
                        name='pronounsUpdate'
                        onChange={(e) => setPronouns(e.target.value)}
                        value={pronouns}
                        placeholder='Pronouns'
                        onBlur={() => setEditPronouns(false)}
                      ></input>
                      <i className="fas fa-sync-alt"></i>
                    </>
                  }
                </div>
              </td>
            </tr>
            <tr>

            </tr>
          </tbody>
        </table>
        
        
        {user.sessionPrice && <CuddlistInfo context={cuddlistContext}/>}
        {!user.sessionPrice && <ClientInfo context={clientContext}/>}
        <div className='flex justify-center m-4'>
          <button 
          className={buttonColor + ' rounded-full shadow-lg text-white font-bold w-2/5 p-1 text-lg m-1'}
          type='submit'>Save</button>
        </div>
      </form>
      
    </>
  )
}

export default ProfileInformation
