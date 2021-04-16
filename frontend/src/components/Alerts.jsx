import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Alert from 'react-bootstrap/Alert'


export default function Alerts() {

    const message = useSelector(state => state.alerts.message)
    const error = useSelector(state => state.alerts.error)

    const dispatch = useDispatch()

    useEffect(() => {
        setTimeout(() => {
            dispatch({type: 'CHANGE_ALERT'})
        }, 3000)
    },)
    
    return(
        <>
        {console.log("I mounted")}
            { message && (<Alert variant="success" >
                {message}
            </Alert>) }
            { error && (<Alert variant="danger">
                {error}
            </Alert>) }
        </>
    )
}
