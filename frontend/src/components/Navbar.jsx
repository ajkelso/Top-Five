import React from 'react'
import { NavLink } from 'react-router-dom'
import { getToken, clearToken } from '../services/local-storage'


export default function Navbar() {
    return(
        <div>
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/lists/new">Create List</NavLink>
        </div>
    )
}