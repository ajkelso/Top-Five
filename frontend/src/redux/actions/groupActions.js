import { categoriesRequest } from '../../services/api'

export function getCategories() {
    return (dispatch) => {
        dispatch({type: 'START_ADDING_CATEGORIES'});
        categoriesRequest()
        .then(res => {
            dispatch( {type: 'ADD_CATEGORIES', payload: res })
        })
        .catch(res => console.log(res))
    }
}


