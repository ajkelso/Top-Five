import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return(
        <div>
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/lists/">Create List</NavLink>
            <NavLink to="/lists/new">Create List</NavLink>
        </div>
    )
}