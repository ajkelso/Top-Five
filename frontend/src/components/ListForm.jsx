import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUserList } from '../redux/actions/userActions'
import { useHistory } from "react-router-dom"
import { Form, Row, Col } from 'react-bootstrap'

function ListForm(props) {

    const [formData, setFormData] = useState({
        category: "",
        first: "",
        second: "",
        third: "",
        fourth: "",
        fifth: ""
    })

    const dispatch = useDispatch()

    const history = useHistory()

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
        dispatch(addUserList(formData, history))
    }

    return(

        <div>

            <h4>Create a top 5 List</h4>

            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Control size="sm" type="text" name="category" placeholder="Choose a Category..." onChange={handleChange} value={formData.category}/>
                </Form.Group>
                <Form.Group as={Row} >
                    <Form.Label column sm={1} htmlFor="First">1.</Form.Label>
                    <Col sm={10}>
                        <Form.Control size="sm" type="text" name="first" onChange={handleChange} value={formData.first}/><br/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} >
                    <Form.Label column sm={1} htmlFor="Second">2.</Form.Label>
                    <Col sm={10}>
                        <Form.Control size="sm" type="text" name="second" onChange={handleChange} value={formData.second}/><br/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} >
                    <Form.Label column sm={1} htmlFor="Third">3.</Form.Label>
                    <Col sm={10}>
                        <Form.Control size="sm" type="text" name="third" onChange={handleChange} value={formData.third}/><br/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} >
                    <Form.Label column sm={1} htmlFor="Fourth">4.</Form.Label>
                    <Col sm={10}>
                        <Form.Control size="sm" type="text" name="fourth" onChange={handleChange} value={formData.fourth}/><br/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} >
                    <Form.Label column sm={1} htmlFor="Fifth">5.</Form.Label>
                    <Col sm={10}>
                        <Form.Control size="sm" type="text" name="fifth" onChange={handleChange} value={formData.fifth}/><br/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} >
                    <Form.Control size="sm" type="submit"/>
                </Form.Group>

            </Form>
        </div>
    )
}

export default ListForm