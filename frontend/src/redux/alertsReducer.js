const initState = {
    error: null,
    message: null
   };
   
export function alertsReducer(state = initState, action){
    
    switch (action.type) {
        case 'ADD_ALERT':
            return {
                ...state,
                message: action.message,
                error: action.error
            }
        case 'CHANGE_ALERT':
            return initState

        default:
            return state;
    }
}