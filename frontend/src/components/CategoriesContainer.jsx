import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCategories } from '../redux/actions/groupActions'
import Category from './Category'


function CategoriesContainer() {
    
    const dispatch = useDispatch()

    const categories = useSelector(state => state.groups.categories)
    
    useEffect(() => {
        dispatch(getCategories())
    }, [])

    const renderCategories = () => {
        return categories.map(cat => <Category key={cat.id} title={cat.title} topTen={cat.top_ten} /> )
    }

    return(
        <div>
            <h3>Categories</h3>
            {!!categories ? renderCategories() : null }
        </div>
    )
}

export default CategoriesContainer