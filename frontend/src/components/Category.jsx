import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

function Category({title, topTen}) {

    const renderTopTen = () => {
        return topTen.map((nom, idx) => (
            <ListGroup.Item key={nom.key}><strong>{nom.name}</strong>  |  points: {nom.votes}</ListGroup.Item>
        ))
    }
    
    return(
        <div>
            <h4>{title}</h4>
            <ListGroup >
                {renderTopTen()}
            </ListGroup>
        </div>
    )
    
}
export default Category