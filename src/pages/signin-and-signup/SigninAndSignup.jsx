
import React from 'react';
import './SigninAndSignup.scss';

import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';

const SigninAndSignup = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
  </div>
)

export default SigninAndSignup;