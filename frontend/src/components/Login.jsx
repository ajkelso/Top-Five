import React, { useState } from 'react'
import { loginRequest } from '../services/api'
import { setToken } from '../services/local-storage'

function Login(props) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("") 
    const [message, setMessage] = useState("")

    const handleChangeUsername = (e) => setUsername(e.target.value)
    const handleChangePassword = (e) => setPassword(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()
        loginRequest({user:{username, password}})
        .then(res => {
            if (res.message) {
                setMessage(res.message)
            } else {
                debugger
                setToken(res.jwt)
                props.history.push('/profile')
            }
        })
    }

    return(
        <div>
           
            <h4>Login Below</h4>

            <form onSubmit={handleSubmit}>
                <p style={{color: 'red'}}>{message}</p>
                <label htmlFor="username">Username: </label>
                <input type="text" onChange={handleChangeUsername} value={username}/><br/>
                <label htmlFor="password">Password: </label>
                <input type="password" onChange={handleChangePassword} value={password}/><br/>
                <input type="submit"/>
            </form>
        </div>
    )


}

export default Login