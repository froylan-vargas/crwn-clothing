import React from 'react'
import { connect } from 'react-redux'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss'

import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectItemsCount } from '../../redux/cart/cart.selectors'

const CartIcon = ({ toggleHidden, itemCount }) => {
    return (
        <div className='cart-icon' onClick={() => toggleHidden()}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{itemCount}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = state => ({
    itemCount: selectItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)