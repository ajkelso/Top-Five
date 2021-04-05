import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUser } from '../redux/actions/userActions'
import { getToken } from '../services/local-storage'
import { Redirect } from 'react-router-dom'

// import { profileRequest } from '../services/api'

function Profile() {

    const user = useSelector(state => state.user)

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getUser())
    }, [])

    const renderProfile = () => {
        if(user.username){
            return (
            <div>
                <h3>Welcome, {user.username}</h3>
            </div>
            )
        }else{
            return <p>PLease Login</p>
        }
    }
    console.log(getToken())

    return(
        <div>
            {!getToken() ? <Redirect to="/login" /> : null }
            {renderProfile()}
        </div>
    )

}

export default Profile