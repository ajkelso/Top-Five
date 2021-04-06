import React from 'react';

function List(props) {
    console.log(props.listData)
    const {category, first, second, third, fourth, fifth} = props.listData

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