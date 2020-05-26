const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (previewState = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...previewState,
                currentUser: action.payload
            }
        default:
            return previewState
    }
}

export default userReducer