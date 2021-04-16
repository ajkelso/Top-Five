import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'


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
            { message && (<div>
                {message}
            </div>) }
            { error && (<div>
                {error}
            </div>) }
        </>
    )
}
