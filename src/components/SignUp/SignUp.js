import React, { useState } from 'react'
import CustomButton from '../CustomButton/CustomButton';
import FormInput from '../FormInput/FormInput';
import axios from 'axios';
import './SignUp.scss';

export default function SignUp() {
  const [inputValue, setInputValue] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '' 
  });

  const handleChange = (event) => {
    const {name, value} = event.target;
    setInputValue({
      ...inputValue,
      [name]:value
    })
  };
  const postData = async () => {
    const URL = 'https://jsonplaceholder.typicode.com/todos';
    const res = await axios.post(URL, {
      fullName: fullName,
      email: email,
      password: password,
      confirmPassword: confirmPassword
    })
    console.log(res.data);
 }


  const handleSubmit = (event) => {
    event.preventDefault();
    if(password !== confirmPassword){
      alert("password don't match");
      return;
    }
    postData();

    setInputValue({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '' 
    })
  }

  const {fullName, email, password, confirmPassword} = inputValue;
    return (
        <div className='signup'>
          <h2 className='signup_title'>I do not have an account</h2>
          <span>Sign up with your email and password</span>
          <form className='signup_form' onSubmit={handleSubmit}>
            <FormInput
              type='text'
              value={fullName}
              name='fullName'
              onChange={handleChange}
              label='Full Name'
              required
            />
            <FormInput
              type='email'
              value={email}
              name='email'
              onChange={handleChange}
              label='Email'
              required
            />
            <FormInput
              type='password'
              value={password}
              name='password'
              onChange={handleChange}
              label='Password'
              required
            />
            <FormInput
              type='password'
              value={confirmPassword}
              name='confirmPassword'
              onChange={handleChange}
              label='Confirm Password'
              required
            />
            <CustomButton type='submit'>Sign up</CustomButton>                       
          </form>
        </div>
    )
};
