import React, { useState } from 'react'
import Login from './Login'
import SignUp from './SignUp'
import { getToken } from '../services/local-storage'
import { Redirect } from 'react-router'
import Button from 'react-bootstrap/Button'

function Home(props) {

    const [login, setLogin] = useState(false)
    const [signUp, setSignUp] = useState(false)

    const handleLoginClick = () => {
        setLogin(true)
        if (signUp) {
            setSignUp(false)
        }
    }

    const handleSignupClick = () => {
        setSignUp(true)
        if (login) {
            setLogin(false)
        }
    }
    
    return (
        
        <div>
            {getToken() ? <Redirect to='/profile'/>: null }
            <h2 class="d-flex justify-content-center">Welcome!</h2>  
            <div class="d-flex justify-content-center">
                <Button variant="outline-info" onClick={handleLoginClick}>Login</Button>{' '}
                <Button variant="outline-info" onClick={handleSignupClick}>SignUp</Button>  
            </div>
            { login ? <Login history={props.history} /> : null }
            { signUp ? <SignUp history={props.history}/> : null }

        </div>
    )
}

export default Home

