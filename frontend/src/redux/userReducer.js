export function userReducer(state = {}, action) {
    switch (action.type) {
        case 'START_ADDING_USER':
            return state
        case 'SET_USER':
            return action.payload || state
        case 'CLEAR_USER' :
            return ({})
        case 'START_ADDING_LIST' :
            return state
        case 'ADD_LIST' :
            return {
                    ...state,
                    lists: [...state.lists, action.payload]
                }
        case 'START_DELETE_LIST' :
            return state
        case 'DELETE_LIST' :
            return {
                ...state,
                lists: state.lists.filter(list => list.id !== action.payload.list_id )
            }
        case 'UPDATE_LIST' :
            return {
                ...state, 
                formData: action.payload
            }
        default :
            return state
    }
}