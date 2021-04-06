import { postList, profileRequest } from '../../services/api'

export function getUser(){
    return(dispatch) => {
        dispatch({type: 'START_ADDING_USER'});
        profileRequest()
        .then(res => {
            dispatch({ type: 'SET_USER', payload: res.user})
        })
    }
}

export function addUserList(formData){
    return (dispatch) => { 
        dispatch({type: 'START_ADDING_LIST'});
        postList(formData)
        .then(res => {
            dispatch( {type: 'ADD_LIST', payload: res} ) 
        })
    }
}
