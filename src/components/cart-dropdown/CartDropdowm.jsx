import React from "react";
import CustomButton from '../customButton/CustomButton'
import './cartDropdowm.scss'

const cartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-item' />
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

export default cartDropdown;