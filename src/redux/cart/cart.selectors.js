import { createSelector } from 'reselect'

const selectCart = state => state.cart //input selector

export const selectCartItems = createSelector(
    [selectCart], //array of input selectors
    cart => cart.cartItems   
)

export const selectItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accum, cartItem) => accum + cartItem.quantity, 0)
)

