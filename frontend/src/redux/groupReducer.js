export function groupReducer(state = {}, action) {
    switch (action.type) {
        case 'START_ADDING_CATEGORIES':
            return state
        case 'ADD_CATEGORIES':
            return action.payload || state
        default :
            return state
    }
}