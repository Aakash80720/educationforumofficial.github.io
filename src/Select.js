import React from 'react'
import { useDispatch } from 'react-redux'
import { OpenselectedPost, selectOpenselectedPost } from './newPost'
import './Select.css'
function Select() {
    const dispatch = useDispatch()
    console.log(dispatch(selectOpenselectedPost))

    return (
        <div className ="selected-post">
            
        </div>
    )
}

export default Select
