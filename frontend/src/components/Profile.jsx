import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUser } from '../redux/actions/userActions'

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

    return(
        renderProfile()
    )

}

export default Profile