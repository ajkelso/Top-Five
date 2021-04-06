import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
// trying to get a logout link
// import { getToken, clearToken } from '../services/local-storage'


export default function Navbar() {

    const user = useSelector(state => state.user)

    const loggedInNav = () => {
        return(
        <>
            <NavLink to="/lists/new">Create List</NavLink>
            <NavLink to={'/logout'}>Logout</NavLink>
        </>
        )
        
    }
    
    
    return(
        <div>
            <NavLink to="/profile" exact>Home</NavLink>
            { Object.keys(user).length !== 0 ? loggedInNav() : null }
        </div>
    )
}