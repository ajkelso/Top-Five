import { profileRequest } from '../../services/api'

export function getUser(){
    return(dispatch) => {
        dispatch({type: 'START_ADDING_USER'});
        profileRequest()
        .then(res => {
            dispatch({ type: 'SET_USER', payload: res.user})
        })
    }
}
