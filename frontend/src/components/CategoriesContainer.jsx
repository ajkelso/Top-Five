import React, { useEffect } from 'react'
import { userSelector, useDispatch } from 'react-redux'
import { getCategories } from '../redux/actions/groupActions'


function CategoriesContainer() {
    
    const dispatch = useDispatch()

    // const categories = userSelector()
    
    useEffect(() => {
        dispatch(getCategories())
    }, [])
    
    return(
        <div>
            Categories
        </div>
    )
}

export default CategoriesContainer