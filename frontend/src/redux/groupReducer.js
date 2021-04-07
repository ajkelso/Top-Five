export function groupReducer(state = {}, action) {
    switch (action.type) {
        case 'START_ADDING_CATEGORIES':
            return state
        case 'ADD_CATEGORIES':
            console.log('in group reducer')
            return {...state, categories: action.payload }
        default :
            return state
    }
}