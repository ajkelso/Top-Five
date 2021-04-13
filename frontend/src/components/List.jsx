import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import { deleteList, updateForm } from '../redux/actions/userActions'
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom"


function List(props) {
    const {id, category, first, second, third, fourth, fifth} = props.listData

    const dispatch = useDispatch()
    const history = useHistory()

    const handleUpdate = () => {
        dispatch(updateForm(props.listData ,history))
    }

    const handleDelete = () => {
        dispatch(deleteList(props.id))
    }

    return(
        <div>
            <h5 className="bg-light text-center">{category}</h5>
            <ListGroup variant="flush" >
                <ListGroup.Item ><strong>{first}</strong></ListGroup.Item>
                <ListGroup.Item ><strong>{second}</strong></ListGroup.Item>
                <ListGroup.Item ><strong>{third}</strong></ListGroup.Item>
                <ListGroup.Item ><strong>{fourth}</strong></ListGroup.Item>
                <ListGroup.Item ><strong>{fifth}</strong></ListGroup.Item>
            </ListGroup>
            <Button onClick={handleUpdate} >Update</Button> 
            <Button onClick={handleDelete} >Delete</Button>
        </div>
    )
}

export default List