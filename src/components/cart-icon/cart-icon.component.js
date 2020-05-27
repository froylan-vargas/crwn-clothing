import React from 'react'
import { connect } from 'react-redux'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss'

import {toggleCartHidden} from '../../redux/cart/cart.actions'

const CartIcon = ({toggleHidden}) => {
    return (
        <div className='cart-icon' onClick={()=>toggleHidden()}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleHidden: () => dispatch(toggleCartHidden())
})

export default connect(null,mapDispatchToProps)(CartIcon)