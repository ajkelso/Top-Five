const initState = {
    error: null,
    message: null
   };
   
export function alertsReducer(state = initState, action){
    
    console.log(action.message)
    switch (action.type) {
        case 'ADD_ALERT':
            return {
                ...state,
                message: action.message,
                error: action.error
            }
        case 'RESET_ALERT':
            return initState

        default:
            return state;
    }
}