import React from 'react'
import SignIn from '../../components/signIn/SignIn'
import SignUp from '../../components/singUp/SignUp'
import './SingInUpPage.scss'

const SingInUpPage = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SingInUpPage
