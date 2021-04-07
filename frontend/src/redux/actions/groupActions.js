

export function getCategories() {
    return (dispatch) => {
        dispatch({type: 'START_ADDING_CATEGORIES'});
        
    }
}

// export function getUser(){
//     return(dispatch) => {
//         dispatch({type: 'START_ADDING_USER'});
//         profileRequest()
//         .then(res => {
//             dispatch({ type: 'SET_USER', payload: res.user})
//         })
//     }
// }