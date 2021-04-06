import React, { useState } from 'react'

function SignUp(){


    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        passwordConfirm: ""
    })

    
    const handleChange = (e) => {
        setFormData((prevalue) => {
            return {
                ...prevalue,
                [e.target.name]: e.target.value
            }      
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }



    return(
        <div>
            <h4>Please sign up to start your TopFive!</h4>
            <form onSubmit={handleSubmit}>
                {/* <p style={{color: 'red'}}>{message}</p> */}
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" onChange={handleChange} value={formData.username}/>
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" onChange={handleChange} value={formData.email}/>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" onChange={handleChange} value={formData.password}/>
                <label htmlFor="Confirm Password">Confirm Password: </label>
                <input type="password" name="passwordConfirm" onChange={handleChange} value={formData.passwordConfirm}/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default SignUp