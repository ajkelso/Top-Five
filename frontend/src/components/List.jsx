import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'

function List(props) {
    const {category, first, second, third, fourth, fifth} = props.listData

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
        </div>
    )
}

export default List