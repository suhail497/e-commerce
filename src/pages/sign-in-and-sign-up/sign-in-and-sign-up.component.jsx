import React from 'react'

import './sign-in-and-sign-up.styles.scss'
import SignIn from '../../components/sign-in/sign-in.component'
import SignUP from '../../components/sign-up/sign-up.component'
import { SigninAndSignupPageContainer } from './sign-in-and-sign-up.styles';

const SignInAndSignUpPage = () => (
    <SigninAndSignupPageContainer>
        <SignIn />
        <SignUP />
    </SigninAndSignupPageContainer>
)

export default SignInAndSignUpPage