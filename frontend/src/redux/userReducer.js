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
                lists: state.lists.filter(list => list.list_data.id !== action.payload.list_id )
            }
        case 'UPDATE_FORM' :
            return {
                ...state, 
                formData: action.payload
            }
        case 'START_UPDATE_REQUEST' :
            return state 
        case 'UPDATE_LIST' :
            console.log('reducer update')
            return state
        default :
            return state
    }
}