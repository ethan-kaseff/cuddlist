import React, { useState } from 'react';
import { Modal } from '../../../../context/modal';
import DeleteForm from './DeleteForm';

function DeleteFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* <button onClick={() => setShowModal(true)}>Log In</button> */}
      <button className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => setShowModal(true)}
      >
        <i className="fas fa-trash-alt"></i> Delete Profile
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteForm />
        </Modal>
      )}
    </>
  );
}

export default DeleteFormModal;