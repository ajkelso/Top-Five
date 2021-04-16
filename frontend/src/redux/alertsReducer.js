const initState = {
    error: null,
    message: null
   };
   
export function alertsReducer(state = initState, action){
    
    const { error, message } = action;
   
    if(error){
        return {
            ...state,
            error
        }
    } else if (message){
        return {
            ...state,
            message
        }
    }
   
    return state;
}