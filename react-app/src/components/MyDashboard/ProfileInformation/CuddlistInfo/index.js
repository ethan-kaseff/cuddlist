import React, { useEffect } from "react";

const CuddlistInfo = ({context}) => {
  const {
    editSessionPrice, setEditSessionPrice,
    editTravelPrice, setEditTravelPrice,
    editLocation, setEditLocation,
    editAboutMe, setEditAboutMe,
    editSessionInfo, setEditSessionInfo,
    sessionPrice, setSessionPrice,
    travelPrice, setTravelPrice,
    location, setLocation,
    aboutMe, setAboutMe,
    sessionInfo, setSessionInfo} = context

  // Focus on input when it shows up
  useEffect(() => {
    const input = document.getElementById('input');
    if (input) {
      input.focus();
    }
  })

  return (
    <div>
      <table className='table-fixed'>
        <tbody className='divide-y-2'>
          <tr>
            <td className='w-32'>Session Price</td>
            <td className=''>
              <div>
                {!editSessionPrice && <span onClick={() => setEditSessionPrice(true)}>{sessionPrice} <i className="fas fa-edit fa-xs"></i></span>}
                {editSessionPrice &&
                  <input
                    id='input'
                    type='number'
                    name='sessionPriceUpdate'
                    onChange={(e) => setSessionPrice(e.target.value)}
                    value={sessionPrice}
                    onBlur={() => setEditSessionPrice(false)}
                  ></input>
                }
              </div>
            </td>
          </tr>
          <tr>
            <td>Travel Price</td>
            <td>
              <div>
                {!editTravelPrice && <span onClick={() => setEditTravelPrice(true)}>{travelPrice} <i className="fas fa-edit fa-xs"></i></span>}
                {editTravelPrice &&
                  <input
                    id='input'
                    type='number'
                    name='sessionPriceUpdate'
                    onChange={(e) => setTravelPrice(e.target.value)}
                    value={travelPrice}
                    onBlur={() => setEditTravelPrice(false)}
                  ></input>
                }
              </div>
            </td>
          </tr>
          <tr>
            <td>Location</td>
            <td>
              <div>
                {!editLocation && <span onClick={() => setEditLocation(true)}>{location} <i className="fas fa-edit fa-xs"></i></span>}
                {editLocation &&
                  <input
                    id='input'
                    type='text'
                    name='pronounsUpdate'
                    onChange={(e) => setLocation(e.target.value)}
                    value={location}
                    onBlur={() => setEditLocation(false)}
                  ></input>
                }
              </div>
            </td>
          </tr>
          <tr>
            <td>About Me</td>
            <td>
              <div>
                {!editAboutMe && <span onClick={() => setEditAboutMe(true)}>{aboutMe} <i className="fas fa-edit fa-xs"></i></span>}
                {editAboutMe &&
                  <textarea
                    id='input'
                    autofocus
                    type='text'
                    name='firstNameUpdate'
                    onChange={(e) => setAboutMe(e.target.value)}
                    value={aboutMe}
                    onBlur={() => setEditAboutMe(false)}
                    className='w-10/12 h-32'
                  ></textarea>
                }
              </div>
            </td>
          </tr>
          <tr>
            <td>Session Info</td>
            <td>
              <div>
                {!editSessionInfo && <span onClick={() => setEditSessionInfo(true)}>{sessionInfo || 'click here to add session info'} <i className="fas fa-edit fa-xs"></i></span>}
                {editSessionInfo &&
                  <textarea
                    id='input'
                    type='text'
                    name='lastNameUpdate'
                    onChange={(e) => setSessionInfo(e.target.value)}
                    value={sessionInfo}
                    onBlur={() => setEditSessionInfo(false)}
                    className='w-10/12 h-32'
                  ></textarea>
                }
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CuddlistInfo
