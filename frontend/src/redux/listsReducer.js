export function listsReducer(state = {}, action) {
    switch (action.type) {
        case 'START_ADDING_LIST':
            return state
        case 'ADD_LIST':
            return action.payload || state
        case 'CLEAR_LIST' :
            return ({})
        default :
            return state
    }
}