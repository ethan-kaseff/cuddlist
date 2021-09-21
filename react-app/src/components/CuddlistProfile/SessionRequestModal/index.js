import React, { useState, useEffect } from 'react';
import {useSelector} from 'react-redux'
import { Modal } from '../../../context/modal';
import SessionRequestForm from './SessionRequestForm';

function SessionRequestFormModal({id}) {
  const [showModal, setShowModal] = useState(false);
  const [cuddlist, setCuddlist] = useState(false)
  const [buttonColor, setButtonColor] = useState('bg-blue-500 hover:bg-blue-600')

  const user = useSelector(state => state.session.user)

  useEffect(() => {
    if (user) {
      if (user.type === 'cuddlists'){
        setCuddlist(true)
        setButtonColor('bg-gray-300')

      }
    } else {
      setCuddlist(true)
      setButtonColor('bg-gray-300')
    }
  }, [user])

  return (
    <>
      <button className={buttonColor + ` rounded-lg shadow-lg text-white font-bold w-full p-1 text-lg m-1`}
      disabled={cuddlist}
      type='button'
      onClick={() => setShowModal(true)}>
        Send Session Request
      </button>
      { cuddlist &&
        <p className='text-sm text-red-600 font-hairline text-center p-2 m-3'>
                Login as a client to send requests
              </p>
      }
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SessionRequestForm id={id} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default SessionRequestFormModal;