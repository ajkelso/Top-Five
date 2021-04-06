import React, { useState } from 'react'
import { signUpRequest } from '../services/api'

function SignUp(){


    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
        message: ""
    })

    
    const handleChange = (e) => {
        setFormData((prevalue) => {
            return {
                ...prevalue,
                [e.target.name]: e.target.value
            }      
        })
    }

    const buildUserData = () => {
        if( formData.password !== formData.passwordConfirm) {
            setFormData((prevalue) => {
                return {
                    ...prevalue,
                    message: "Password does not match"
                }
            })
        } else {
            return {
                user: {
                    username: formData.username,
                    email: formData.email,
                    password: formData.password
                }
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        signUpRequest(buildUserData())
    
    }



    return(
        <div>
            <h4>Sign up to start your TopFive!</h4>
            <form onSubmit={handleSubmit}>
                <p style={{color: 'red'}}>{formData.message}</p>
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" onChange={handleChange} value={formData.username}/><br/>
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" onChange={handleChange} value={formData.email}/><br/>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" onChange={handleChange} value={formData.password}/><br/>
                <label htmlFor="Confirm Password">Confirm Password: </label>
                <input type="password" name="passwordConfirm" onChange={handleChange} value={formData.passwordConfirm}/><br/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default SignUp