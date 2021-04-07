import { categoriesRequest } from '../../services/api'

export function getCategories() {
    return (dispatch) => {
        dispatch({type: 'START_ADDING_CATEGORIES'});
        categoriesRequest()
        .then(res => {
            dispatch({ type: 'ADD_CATEGORIES', payload: res.categories })
        })
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