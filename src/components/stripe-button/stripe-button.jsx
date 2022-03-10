import React from "react";
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51KbptYEf95NXb0wejMSkQLoSFv7mVyl7FOQDXL76XC3k3IabbPWdwxNAxZvjMLVUEBlZEZ4krzaSyGxbcC4xYxET00s2DBLAXl';

    const onToke = token => {
        console.log(token)
        alert('Payment successful')
    }

    return(
        <StripeCheckout 
        label="Pay Now"
        name="Clothing store"
        billingAddress
        shippingAddress
        description={`Your total is $${price}`} 
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToke}
        stripeKey={publishablekey} />
    )
}

export default StripeCheckoutButton