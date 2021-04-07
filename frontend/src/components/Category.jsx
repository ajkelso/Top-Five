import React from 'react'

function Category({title, topTen}) {

    const renderTopTen = () => {
        return topTen.map(nom => (
            <li><strong>{nom.name}</strong>  |  points: {nom.votes}</li>
        ))
    }
    
    return(
        <div>
            <h5>{title}</h5>
            <ol>
                {renderTopTen()}
            </ol>
        </div>
    )
    
}
export default Category