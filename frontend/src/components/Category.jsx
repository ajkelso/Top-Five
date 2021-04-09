import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

function Category({title, topTen}) {

    const renderTopTen = () => {
        return topTen.map(nom => (
            <ListGroup.Item  key={nom.id}><strong>{nom.name}</strong>  |  points: {nom.votes}</ListGroup.Item>
        ))
    }
    
    return(
        <div>
            <h4 className="text-center bg-dark text-white">{title}</h4>
            <ListGroup variant="flush" >
                {renderTopTen()}
            </ListGroup>
        </div>
    )
    
}
export default Category