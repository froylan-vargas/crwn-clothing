import { createSelector } from 'reselect'

const selectCart = state => state.cart //input selector

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItems = createSelector(
    [selectCart], //array of input selectors
    cart => cart.cartItems   
)

export const selectItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accum, cartItem) => accum + cartItem.quantity, 0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accum, cartItem) => accum + cartItem.price * cartItem.quantity, 0)
)

