import React from 'react'
import './sign-in.styles.scss'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { SignInContainer, SignInTitle, SignInButtons } from './sign-in.styles';



class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        // as per class
        const { email, password } = this.state;


        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        // console.log(name,value)

        this.setState({ [name]: value });
    }

    render() {

        return (
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and passowrd</span>

                <form onSubmit={this.handleSubmit}>


                    <FormInput name='email' type='email' label='Email'
                        handleChange={this.handleChange} value={this.state.email} required />



                    <FormInput name='password' type='password' label='Password'
                        handleChange={this.handleChange} value={this.state.password} required />

                    <SignInButtons>
                        <CustomButton type='submit'>SIGN IN</CustomButton>
                        <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn='true'>
                            SIGNINWITHGOOGLE
                        </CustomButton>
                    </SignInButtons>

                </form>
            </SignInContainer>
        )
    }
}


export default SignIn
