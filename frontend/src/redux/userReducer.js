export function userReducer(state = {}, action) {
    switch (action.type) {
        case 'START_ADDING_USER':
            return state
        case 'SET_USER':
            return action.payload
        case 'CLEAR_USER' :
            return ({})
        default :
            return state
    }
}