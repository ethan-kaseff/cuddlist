import React, { useState } from 'react';
import { Modal } from '../../../context/modal';
import SessionRequestForm from './SessionRequestForm';

function SessionRequestFormModal({id}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='bg-blue-500 hover:bg-blue-600 rounded-lg shadow-lg text-white font-bold w-full p-1 text-lg m-1'
      type='button'
      onClick={() => setShowModal(true)}>
        Send Session Request
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SessionRequestForm id={id}/>
        </Modal>
      )}
    </>
  );
}

export default SessionRequestFormModal;