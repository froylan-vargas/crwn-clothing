import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

import './stripe-button.styles.scss'

const onToken = token => {
    console.log(token)
    alert('Payment successful')
}

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_WaJ7Qh6heiJ0JTdGack6UzXz00vN81Wt67'
    return (
        <StripeCheckout
            label='Pay Now'
            name='Crown Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`You total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton
