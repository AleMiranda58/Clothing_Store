import React from "react";
import { connect } from "react-redux";
import CartItem from "../cart-item/CartItem";
import CustomButton from '../customButton/CustomButton'
import './cartDropdowm.scss'

const cartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={CartItem} />
            ))}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = ({ cart: {cartItems} }) => ({
    cartItems
})


export default connect(mapStateToProps)(cartDropdown);