import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUser } from '../redux/actions/userActions'
import { getToken } from '../services/local-storage'
import { Redirect } from 'react-router-dom'

import ListContainer from './ListContainer'

// import { profileRequest } from '../services/api'

function Profile() {

    const user = useSelector(state => state.user)

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getUser())
    }, [])

    return(
        <div>
            <h3>Welcome, {user.username}!</h3>
           
            <ListContainer lists={user.lists} />
        </div>
    )

}

export default Profile