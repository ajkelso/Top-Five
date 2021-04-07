import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCategories } from '../redux/actions/groupActions'


function CategoriesContainer() {
    
    const dispatch = useDispatch()
    
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