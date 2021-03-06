import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import CuddlistInfo from "./CuddlistInfo";
import ClientInfo from "./ClientInfo";
import ImageUpload from "./ImageUpload";
import DeleteFormModal from "./DeleteModal";
import {updateUserDb} from '../../../store/session'
import { deleteImage } from "../../../store/session";

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
  const [pronouns, setPronouns] = useState(user.pronouns);
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
    if (firstName !== user.firstName ||
      lastName !== user.lastName ||
      location !== user.location ||
      pronouns !== user.pronouns ||
      travelPrice !== user.travelPrice ||
      sessionInfo !== user.sessionInfo ||
      sessionPrice !== user.sessionPrice ||
      aboutMe !== user.aboutMe ||
      phoneNumber !== user.phoneNumber) {
      setButtonColor('bg-blue-700 hover:bg-blue-500')

    }
  },[firstName, user.firstName,
    lastName, user.lastName,
    pronouns, user.pronouns,
    location, user.location,
    travelPrice,  user.travelPrice,
    sessionInfo, user.sessionInfo,
    sessionPrice,  user.sessionPrice,
    aboutMe, user.aboutMe,
    phoneNumber, user.phoneNumber])


  // Focus on input when it shows up
  useEffect(() => {
    const input = document.getElementById('input');
    if (input) {
      input.focus();
    }
  })

  // Update store for each keystroke in each field 
  // const validate = (string) => {
  //   if (!firstName.length == 0 && firstName.trim()) {
  //     updateUser.first_name = firstName;
  //   }
  // }



  const handleSubmit = (e) => {
    e.preventDefault()
    let userToSend = {}
    if (user.type == 'cuddlists') {
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
    setButtonColor('bg-gray-500')
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
          <tbody className='divide-y-2'>
            <tr>
              <td className='w-32'>First Name</td>
              <td className=''>
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
        
        
        {user.type === 'cuddlists' && <CuddlistInfo context={cuddlistContext}/>}
        {user.type === 'clients' && <ClientInfo context={clientContext}/>}
        <div className='flex justify-center m-4'>
          <button 
            className={buttonColor + ' rounded-full shadow-lg text-white font-bold w-2/5 p-1 text-lg m-1'}
            type='submit'
          >Save</button>
        </div>
      </form>
      {user.type === 'cuddlists' &&
        <div>
          <h1 className='text-center text-blue-500 mb-5 font-bold text-xl'>Upload a photo for your page</h1>
          <ImageUpload />
          <div className='flex flex-wrap'>
            { user.images &&
              user.images.map( image => {
                return (
                  <div className='w-1/2 p-6 flex justify-center flex-col relative'>
                    <img src={image.imageUrl} alt={'photo' + image.id}></img>
                    <button
                      onClick={() => dispatch(deleteImage(image.id))}
                      >
                      <div className={"absolute right-8 top-8 rounded-full bg-red-500 p-1 text-xs shadow w-6 h-6 "}><i className="fas fa-times text-white"></i></div>

                    </button>

                  </div>
                )
              })
            }
          </div>
          <div>

          </div>
        </div>
      }
      <DeleteFormModal />
    </>
  )
}

export default ProfileInformation
