import React, { useState } from 'react'
import { signUpRequest } from '../services/api'
import { setToken } from '../services/local-storage'
import {Form, Row, Col, Alert} from 'react-bootstrap'

function SignUp(props){

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
                    username: formData.username.trim(),
                    email: formData.email.trim(),
                    password: formData.password
                }
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        signUpRequest(buildUserData())
        .then(res => {
            console.log(res);
            if (res.error){
                setFormData((prevalue) => {
                    return {
                        ...prevalue,
                        message: res.error
                    }
                })
            } else {
                setToken(res.jwt)
                props.history.push('/profile')
            }
        })
    }

    const alertClose = () => {
        setFormData((prevalue) => {
            return {
                ...prevalue,
                message: ""
            }
        })
    }

    return(
        <div>
            <h4 className="d-flex justify-content-center">Sign up to start your TopFive!</h4>
            <Form onSubmit={handleSubmit}>
                {formData.message ? <Alert variant="danger" onClose={alertClose} dismissible>{formData.message}</Alert> : null }
                <Form.Group as={Row} className="justify-content-md-center" >
                    <Col sm={8} xs lg="3">
                        <Form.Control type="text" placeholder="Username" name="username" onChange={handleChange} value={formData.username}/><br/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="justify-content-md-center" >
                    <Col sm={8} xs lg="3">
                        <Form.Control type="email" placeholder="email" name="email" onChange={handleChange} value={formData.email}/><br/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="justify-content-md-center" >
                    <Col sm={8} xs lg="3">
                        <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} value={formData.password}/><br/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="justify-content-md-center" >
                    <Col sm={8} xs lg="3">
                        <Form.Control type="password" placeholder="Confirm Password" name="passwordConfirm" onChange={handleChange} value={formData.passwordConfirm}/><br/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="justify-content-md-center" >
                    <Col sm={8} xs lg="3">
                        <Form.Control type="submit"/>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    )
}

export default SignUp