import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { getToken } from '../services/local-storage'

export default function Navigation() {

    const loggedInNav = () => {
        return(
        <Navbar bg="light" variant="light" expand="sm" > 
            <Navbar.Brand as={NavLink} to="/">Top5</Navbar.Brand>
            <Nav className="mr-auto">   
                <Nav.Link as={NavLink} to="/profile">Profile</Nav.Link>
                <Nav.Link as={NavLink} to="/lists/new">Create List</Nav.Link>
                <Nav.Link as={NavLink} to="/categories">Categories</Nav.Link>
                <Nav.Link as={NavLink} to='/logout'>Logout</Nav.Link>
            </Nav>  
        </Navbar>
        )
    }

    const loggedOutNav = () => {
        return (
        <Navbar bg="light" variant="light" expand="sm" > 
            <Navbar.Brand as={NavLink} to="/">Top5</Navbar.Brand>
        </Navbar>
        )
    }
    
    
    return(
        <div>
            { getToken() ? loggedInNav() : loggedOutNav() }
        </div>
    )
}