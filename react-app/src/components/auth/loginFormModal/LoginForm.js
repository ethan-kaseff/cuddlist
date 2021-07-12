import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { login } from "../../../store/session";

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.session.user)
  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();

    const errs = {}
    if (!email.includes('@') || !email.includes('.com')) {
      errs.email = 'Please enter a valid email'
    }
    if (password.length < 6) {
      errs.password = 'Please enter a password longer than 6 characters'
    }
    if (errs) {
      const data = await dispatch(login(email, password));
      if (data.errors) {
        errs.dataErrors = data.errors
        // setErrors(data.errors);
      } 
      if (errs === {}) {
        history.push('/my-dashboard')
      }
    }
    setErrors(errs)


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
    <div className='flex flex-col justify-center m-16'>
      <form 
      onSubmit={onLogin}
      className='flex shadow-lg flex-col justify-center w-64 p-4'>
        {/* <div>
          {errors.map((error) => (
            <div>{error}</div>
          ))}
        </div> */}
        <div className="text-center text-blue-500 mb-5 font-bold text-xl">
          Log in
        </div>
        {errors.email &&
          <p
            className='text-sm text-red-400'
          >{errors.email}</p>
        }
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
          className='border-b m-auto mb-4 text-grey-400 p-2'
        />
        {errors.password &&
          <p
            className='text-sm text-red-400'
          >{errors.password}</p>
        }
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
          className='border-b m-auto mb-4 text-grey-400 p-2'
        />
        {errors.dataErrors &&
          errors.dataErrors.map(error => {
            return (<p
              className='text-sm text-red-400'
            >{error}</p>)
          })
        }
        <div className='flex justify-center m-2'>
          <button type="submit"
          className='bg-purple-400 hover:bg-purple-500 rounded-full shadow-lg text-white font-bold w-2/5 p-1 text-lg m-1'>
            Login
          </button>
        </div>
      </form>
      <div className='flex flex-col mt-6'>
          <button onClick={() => dispatch(login('client1@client.com', 'password'))}
            className='bg-purple-400 hover:bg-purple-500 rounded-full shadow-lg text-white font-bold p-1 text-lg m-1'>
            Demo Client
          </button>
          <button onClick={() => dispatch(login('cuddlist1@cuddlist.com', 'password'))}
            className='bg-purple-400 hover:bg-purple-500 rounded-full shadow-lg text-white font-bold p-1 text-lg m-1'>
            Demo Cuddlist
          </button>
      </div>
     </div>
  );
};

export default LoginForm;
