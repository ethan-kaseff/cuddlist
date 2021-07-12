import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from 'react-router-dom';
import { signUp } from '../../../store/session';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cuddlist, setCuddlist] = useState(false);
  const [errors, setErrors] = useState({})

  const onSignUp = async (e) => {

    e.preventDefault();
    const errs = {}
    if (!email.includes('@') && !email.includes('.com')) {
      errs.email = 'Please enter a valid email'
    }
    if (password.length < 6) {
      errs.password = 'Please enter a password longer than 6 characters'
    }
    if (password === repeatPassword) {
      errs.repeatPassword = 'Please use matching passwords'
    }
    if (firstName.length < 3) {
      errs.firstName = 'Please enter at least two characters'
    }
    if (lastName.length < 3) {
      errs.lastName = 'Please enter at least two characters'
    }


    setErrors(errs)
    if (errs === {}) {
      await dispatch(signUp(email, password, firstName, lastName, cuddlist));
      history.push('/my-dashboard')
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateCuddlist = (e) => {
    setCuddlist(!cuddlist);
  };

  if (user) {
    return <Redirect to="/profile-page" />;
  }

  return (
    <div className='flex justify-center m-16'>
      <form onSubmit={onSignUp}
        className='flex shadow-lg flex-col justify-center w-64 p-4'>
        <div className="text-center text-blue-500 mb-5 font-bold text-xl">
          Sign Up
        </div>
        { errors.email &&
            <p
              className='text-sm text-red-400'
              >{errors.email}</p>
        }
        <input
          type="text"
          name="email"
          onChange={updateEmail}
          value={email}
          placeholder='Email'
          className='border-b m-auto mb-4 text-grey-400 p-2'
        ></input>
        {errors.password &&
          <p
            className='text-sm text-red-400'
          >{errors.password}</p>
        }
        <input
          type="password"
          name="password"
          onChange={updatePassword}
          value={password}
          placeholder='Password'
          className='border-b m-auto mb-4 text-grey-400 p-2'
        ></input>
        {errors.repeatPassword &&
          <p
            className='text-sm text-red-400'
          >{errors.repeatPassword}</p>
        }
        <input
          type="password"
          name="repeat_password"
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
          placeholder='Repeat Password'
          className='border-b m-auto mb-4 text-grey-400 p-2'
        ></input>
        {errors.firstName &&
          <p
            className='text-sm text-red-400'
          >{errors.firstName}</p>
        }
        <input
          type="text"
          name="firstName"
          onChange={updateFirstName}
          value={firstName}
          placeholder='First Name'
          className='border-b m-auto mb-4 text-grey-400 p-2'
        ></input>
        {errors.lastName &&
          <p
            className='text-sm text-red-400'
          >{errors.lastName}</p>
        }
        <input
          type="text"
          name="lastName"
          onChange={updateLastName}
          value={lastName}
          placeholder='Last Name'
          className='border-b m-auto mb-4 text-grey-400 p-2'
        ></input>
        <div className='flex justify-center items-center'>
          <label>Sign up as a Cuddlist?</label>
          <input
            type="checkbox"
            name="cuddlist"
            onChange={updateCuddlist}
            value={cuddlist}
            className='m-3'
          ></input>
        </div>
        <div className='flex justify-center m-4'>
          <button type="submit"
            className='bg-purple-400 hover:bg-purple-500 rounded-full shadow-lg text-white font-bold w-3/5 p-1 text-lg'>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
