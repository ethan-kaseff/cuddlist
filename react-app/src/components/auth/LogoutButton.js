import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return <button 
          className='p-2 m-2 flex items-center shadow bg-pink-300 px-4 py-2 hover:bg-pink-400 rounded-xl'
          onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
