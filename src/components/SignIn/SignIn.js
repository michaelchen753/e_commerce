import React from 'react'
import { useState } from 'react';

import './SignIn.scss';
export default function SignIn() {
  const [inputValue, setInputValue] = useState({
    email: '',
    password: ''
  });

  const { email, password } = inputValue;

  const onHandleSubmit = event => {
    event.preventDefault();
    setInputValue({
      email: '',
      password: ''
    })
  };

  const onHandleChange = event => {
    const { value, name } = event.target;
    setInputValue({
      ...inputValue,
      [name]: value
    })
  }
    return (
        <div className='signin'>
          <h2>I already have an account</h2>
          <span>Sign in with your email and password</span>
          <form
            onSubmit={onHandleSubmit}>
            <label htmlFor='email'>Email:</label>
            <input 
              type='email'
              name='email' 
              value={email}
              onChange={onHandleChange}
              required />
            <label htmlFor='password'>Password:</label>
            <input 
              type='password'
              name='password' 
              value={password}
              onChange={onHandleChange}
              required />
            <input type='submit' value='Submit'/>
          </form>
        </div>        
    )
}
