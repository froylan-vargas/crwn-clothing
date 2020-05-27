import { UserActionTypes } from './user.types'

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (previewState = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...previewState,
                currentUser: action.payload
            }
        default:
            return previewState
    }
}

export default userReducer