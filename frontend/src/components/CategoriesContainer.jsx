import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router'
import { getCategories } from '../redux/actions/groupActions'
import Category from './Category'
import { clearToken } from '../services/local-storage'



function CategoriesContainer() {
    
    const dispatch = useDispatch()

    const categories = useSelector(state => state.groups.categories)
    
    useEffect(() => {
        dispatch(getCategories())
    }, [])

    const renderCategories = () => {
        console.log(categories)
        return categories.map(cat => <Category key={cat.id} title={cat.title} topTen={cat.top_ten} /> )
    }

    const logout = () => {
        clearToken()
        return <Redirect to="/" />
    }

    return(
        <div>
            <h3 className="text-center">Categories</h3>
            {!!categories ? renderCategories() : logout() }
        </div>
    )
}

export default CategoriesContainer