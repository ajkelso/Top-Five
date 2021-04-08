import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function Navigation() {

    const user = useSelector(state => state.user)

    const loggedInNav = () => {
        return(
        <Navbar bg="primary" variant="light" expand="sm" > 
            <Navbar.Brand href="/">Top5</Navbar.Brand>
            <Nav className="mr-auto">   
                <Nav.Link href="/profile">Profile</Nav.Link>
                <Nav.Link href="/lists/new">Create List</Nav.Link>
                <Nav.Link href="/categories">Categories</Nav.Link>
                <Nav.Link href='/logout'>Logout</Nav.Link>
            </Nav>
             
        </Navbar>
        )
        
    }
    
    
    return(
        <div>
            {/* <NavLink to="/profile" exact>Home</NavLink> */}
            { Object.keys(user).length !== 0 ? loggedInNav() : null }
        </div>
    )
}