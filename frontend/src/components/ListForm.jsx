import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUserList } from '../redux/actions/userActions'
import { useHistory } from "react-router-dom"
import Form from 'react-bootstrap/Form'

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

            <form onSubmit={handleSubmit}>
                <Form.Group controlId="listForm.category">
                    <Form.Control type="text" name="category" placeholder="Choose a Category..." onChange={handleChange} value={formData.category}/>
                </Form.Group>
                <Form.Group controlId="listForm.First">
                    <Form.Label htmlFor="First">1.</Form.Label>
                    <Form.Control type="text" name="first" onChange={handleChange} value={formData.first}/><br/>
                </Form.Group>

                <Form.Group controlId="listForm.Second">
                    <Form.Label htmlFor="Second">2.</Form.Label>
                    <Form.Control type="text" name="second" onChange={handleChange} value={formData.second}/><br/>
                </Form.Group>

                <Form.Group controlId="listForm.Third">
                    <Form.Label htmlFor="Third">3.</Form.Label>
                    <Form.Control type="text" name="third" onChange={handleChange} value={formData.third}/><br/>
                </Form.Group>

                <Form.Group controlId="listForm.Fourth">
                    <Form.Label htmlFor="Fourth">4.</Form.Label>
                    <Form.Control type="text" name="fourth" onChange={handleChange} value={formData.fourth}/><br/>
                </Form.Group>

                <Form.Group controlId="listForm.Fifth">
                    <Form.Label htmlFor="Fifth">5.</Form.Label>
                    <Form.Control type="text" name="fifth" onChange={handleChange} value={formData.fifth}/><br/>
                </Form.Group>

                <Form.Group controlId="listForm.Submit">
                    <Form.Control type="submit"/>
                </Form.Group>

            </form>
        </div>
    )
}

export default ListForm