import React from 'react'
import { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import axios from 'axios';
import './SignIn.scss';
export default function SignIn() {
  const [inputValue, setInputValue] = useState({
    email: '',
    password: ''
  });

  const { email, password } = inputValue;

  const postData = async () => {
    const URL = 'https://jsonplaceholder.typicode.com/todos';
    const res = await axios.post(URL, {
      email:email,
      password: password
    })
      console.log(res.data);
  };

  const handleSubmit = event => {    
    event.preventDefault();
    postData();
    setInputValue({
      email: '',
      password: ''
    })      
  };

  const handleChange = event => {
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
            onSubmit={handleSubmit}>
            {/* <label htmlFor='email'>Email:</label> */}
            <FormInput 
              type='email'
              name='email' 
              value={email}
              onChange={handleChange}
              label='email'
              required />
            {/* <label htmlFor='password'>Password:</label> */}
            <FormInput 
              type='password'
              name='password' 
              value={password}
              onChange={handleChange}
              label='password'
              required />
            <CustomButton type='submit'>Sign in</CustomButton>
          </form>
        </div>        
    )
}
