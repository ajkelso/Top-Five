import React from 'react'
import { useSelector } from 'react-redux'


export default function Alerts() {

    const message = useSelector(state => state.alerts.message)
    const error = useSelector(state => state.alerts.error)

    return(
        <>
            { message && (<div>
                {message}
            </div>) }
        </>
    )
}
