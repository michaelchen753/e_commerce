import React from 'react'
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import './SignInAndSignUp.scss';

export default function SignInAndSignUp() {
    return (
        <div className='signinandsignup'>
          <SignIn/>
          <SignUp/>
        </div>
    )
}
