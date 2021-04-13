import { postList, profileRequest, deleteListRequest, updateListRequest  } from '../../services/api'

export function getUser(){
    return(dispatch) => {
        dispatch({type: 'START_ADDING_USER'});
        profileRequest()
        .then(res => {
            dispatch({ type: 'SET_USER', payload: res.user})
        })
    }
}

export function addUserList(formData, history){
    return (dispatch) => { 
        dispatch({type: 'START_ADDING_LIST'});
        postList(formData)
        .then(res => {
            dispatch( {type: 'ADD_LIST', payload: res} ) 
            history.push('/profile')
        })
    }
}

export function clearUser() {
    return (dispatch) => dispatch({type: 'CLEAR_USER'})
}

export function deleteList(listId) {
    return (dispatch) => {
        dispatch({type: 'START_DELETE_LIST'});
        deleteListRequest(listId)
        .then(res => {
            dispatch( { type: 'DELETE_LIST', payload: res} )
        })
    }
}

export function updateForm(listData, history) {
    
    return (dispatch) => {
        dispatch( {type: 'UPDATE_FORM', payload: listData })
        history.push('./lists/new')
    }
}

export function updateList(listData, history) {
    return (dispatch) => {
        dispatch ({type: 'START_UPDATE_REQUEST'});
        updateListRequest(listData)
        .then(res => {
            dispatch({type: 'UPDATE_LIST', payload: res})
            history.push('/profile')
        })
    }
}
