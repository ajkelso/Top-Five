import React, { useState } from 'react'
import Login from './Login'
import SignUp from './SignUp'
import { getToken } from '../services/local-storage'
import { Redirect } from 'react-router'

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
            <h2>Welcome!</h2>  

            <p>Please <button onClick={handleLoginClick}>Login</button> or <button onClick={handleSignupClick}>SignUp</button> !</p>   
            { login ? <Login history={props.history} /> : null }
            { signUp ? <SignUp history={props.history}/> : null }


        </div>
    )
}

export default Home

