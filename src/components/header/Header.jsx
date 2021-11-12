import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from '../cart-icon/CartIcon'
import CartDropdowm from '../cart-dropdown/CartDropdowm'
import './header.scss'

const Header = ({ currentUser }) => {
    return (
        <div className='header'>
            <Link className='logo-container' to="/" >
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                SHOP
                </Link>
                <Link className='option' to='/shop'>
                CONTACT
                </Link>
                {currentUser ? (
                    <div className='option' onClick={()=>auth.signOut()}>SING OUT</div>
                    ): (
                    <Link className='option' to='/signin'>SIGN IN</Link>
                    )}
                <CartIcon />
            </div>
            <CartDropdowm />
        </div>
    )   
}
const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header)
