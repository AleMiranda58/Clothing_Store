import CartActionTypes from './cart.types'

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

//add items to the cart
export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})