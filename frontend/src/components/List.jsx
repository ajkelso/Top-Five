import React from 'react';
import Table from 'react-bootstrap/Table'

function List(props) {
    const {category, first, second, third, fourth, fifth} = props.listData

    return(
        <div>
        <h5 className="text-center">{category}</h5>
        <Table bordered size="sm">
            <tbody> 
                <tr>
                    <td width='100px'>1st</td>
                    <td >{first}</td>
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
        </div>
    )
}

export default List