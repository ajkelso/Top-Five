import React, { useEffect } from 'react'
import { getCategories } from '../redux/actions/groupActions'


function CategoriesContainer() {

    useEffect(() => {
        dispatch(getCategories())
    }, [])

    return(
        <div>

        </div>
    )
}

export default CategoriesContainer