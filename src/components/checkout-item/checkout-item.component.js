import React from 'react'
import { connect } from 'react-redux'

import './checkout-item.styles.scss'
import { removeItem, addItem, removeQuantity } from '../../redux/cart/cart.actions'

const CheckoutItem = ({ cartItem, removeItem, addItem, removeQuantity }) => {
    const { name, price, quantity, imageUrl } = cartItem
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img alt='item' src={imageUrl} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div onClick={() => removeQuantity(cartItem)} className='arrow'>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div onClick={() => addItem(cartItem)} className='arrow'>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div onClick={() => removeItem(cartItem)} className='remove-button'>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    removeItem: cartItem => dispatch(removeItem(cartItem)),
    addItem: cartItem => dispatch(addItem(cartItem)),
    removeQuantity: cartItem => dispatch(removeQuantity(cartItem))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)