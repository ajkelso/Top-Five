import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUser } from '../redux/actions/userActions'
import ListContainer from './ListContainer'
import { Link } from 'react-router-dom'

function Profile() {

    const user = useSelector(state => state.user)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUser())
    }, [])

    return(
        <div>
            <h2 className="text-center">Welcome, {user.username}!</h2>
           
            {user.lists && user.lists.length ? <ListContainer lists={user.lists} /> : <Link className="btn btn-info btn-lg d-flex justify-content-center" to="/lists/new">Start Creating Lists!</Link>}
        </div>
    )
}

export default Profile