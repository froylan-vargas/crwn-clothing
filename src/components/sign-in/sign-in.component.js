import React, { Component } from 'react'

import './sign-in.styles.scss'

import { signInWithGoogle, auth } from '../../firebase/firebase.utils'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: '', password: '' })
        } catch (error) {
            console.log(error)
        }
    }

    handleChange = event => {
        const { value, name } = event.target

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type="email"
                        value={this.state.email}
                        required
                        handleChange={this.handleChange}
                        label={'email'}
                    />
                    <FormInput
                        name='password'
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label={'password'}
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type="submit">SIGN IN</CustomButton>
                        <CustomButton type="button" isGoogleSignIn onClick={signInWithGoogle}>Sign in with Google</CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}

export default SignIn