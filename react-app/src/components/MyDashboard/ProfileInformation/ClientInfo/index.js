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
    <div>
      <table className='table-fixed'> 
        <tbody className="divide-y-2">
          <tr>
            <td className="w-32">Phone Number</td>
            <td>
              <div>
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
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ClientInfo
