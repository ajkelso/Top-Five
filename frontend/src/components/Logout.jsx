import React, { useEffect } from 'react'
import { Redirect } from 'react-router'
import { clearToken } from '../services/local-storage'
import { clearUser } from '../redux/actions/userActions'
import { useDispatch } from 'react-redux'


export default function Logout() {

    const dispatch = useDispatch()

    console.log('logout fired');
    useEffect(() => {
        clearToken()
        dispatch(clearUser())
    }, [])

    return <Redirect to='login'/>
}

