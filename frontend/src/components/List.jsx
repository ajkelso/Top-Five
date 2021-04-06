import React from 'react';

function List(props) {
    const [category, first, second, third, fourth, fifth] = props

    return(
        <div>
            <h3>{category}</h3>
            <ol>
                <li>{first}</li>
                <li>{second}</li>
                <li>{third}</li>
                <li>{fourth}</li>
                <li>{fifth}</li>
            </ol>
        </div>
    )
}

export default List