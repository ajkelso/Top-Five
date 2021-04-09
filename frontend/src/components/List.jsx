import React from 'react';
import Table from 'react-bootstrap/Table'

function List(props) {
    const {category, first, second, third, fourth, fifth} = props.listData

    return(
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th width='20px'>Ranking</th>
                    <th>{category}</th>
                </tr>
            </thead>
            <tbody>
                
                <tr>
                    <td>1st</td>
                    <td>{first}</td>
                </tr>
                <tr>
                    <td>2nd</td>
                    <td>{second}</td>
                </tr>
                <tr>
                    <td>3rd</td>
                    <td>{third}</td>
                </tr>
                <tr>
                    <td>4th</td>
                    <td>{fourth}</td>
                </tr>
                <tr>
                    <td>5th</td>
                    <td>{fifth}</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default List