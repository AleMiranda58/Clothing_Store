import React from 'react'
import FormInput from '../formInput/FormInput'
import CustomButton from '../customButton/CustomButton'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import './singUp.scss'

class SignUp extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    render(){
        const {displayName, email, password, confirmPassword} = this.state
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with you email and password</span>
                <form className='sign-up-form' onSubmit={}>
                    <FormInput
                    type= 'text'
                    name= 'displayName'
                    value= {displayName}
                    onChange={}
                    label= 'Display name'
                    required />

                    <FormInput
                    type= 'email'
                    name= 'email'
                    value= {email}
                    onChange={}
                    label= 'Display email'
                    required />

                    <FormInput
                    type= 'password'
                    name= 'password'
                    value= {password}
                    onChange={}
                    label= 'Display password'
                    required />

                    <FormInput
                    type= 'password'
                    name= 'confirmPassword'
                    value= {confirmPassword}
                    onChange={}
                    label= 'confirm Password'
                    required />
                </form>
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </div>
        )
    }
}

export default SignUp;
