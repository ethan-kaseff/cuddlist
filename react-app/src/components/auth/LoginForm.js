import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";

const LoginForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data.errors) {
      setErrors(data.errors);
    } 
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  // used parts of open source project Tailwind Templates
  return (
    <div className='flex justify-center m-16'>
      <form 
      onSubmit={onLogin}
      className='flex shadow-lg flex-col justify-center w-64 p-4'>
        <div>
          {errors.map((error) => (
            <div>{error}</div>
          ))}
        </div>
        <div className="text-center text-blue-500 mb-5 font-bold text-xl">
          Log in
        </div>
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
          className='border-b m-auto mb-4 text-grey-400 p-2'
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
          className='border-b m-auto mb-4 text-grey-400 p-2'
        />
        <div className='flex justify-center m-2'>
          <button type="submit"
          className='bg-purple-400 hover:bg-purple-500 rounded-full shadow-lg text-white font-bold w-1/2 p-1 text-lg'>
            Login
          </button>
        </div>
      </form>
     </div>
  );
};

export default LoginForm;
