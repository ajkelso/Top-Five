import React, { useEffect } from 'react'
import { Redirect } from 'react-router'
import { clearToken } from '../services/local-storage'


export default function Logout() {
    useEffect(() => {
        clearToken()
    }, [])

    return <Redirect to='login'/>
}

