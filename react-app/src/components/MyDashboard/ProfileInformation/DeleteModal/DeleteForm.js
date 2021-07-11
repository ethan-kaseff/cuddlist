import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom';
import {deleteProfile} from '../../../../store/session';

function DeleteForm() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)
  const history = useHistory()

  const handleSubmit = async () => {
    await dispatch(deleteProfile(user.id))
    history.push('/')
  }


  return (
    <div className='flex justify-center m-16'>
      <form className='flex shadow-lg flex-col justify-center w-64 p-4'>
        <h2 className="text-red-500 font-bold">Are you sure you want to delete your profile?</h2>
        <p>*click outside the box if not*</p>
        <button className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={handleSubmit}
        >
          <i className="fas fa-trash-alt"></i> Delete Profile
        </button>
      </form>
    </div>
  )
}

export default DeleteForm
