import React from 'react'
import {Avatar} from '@material-ui/core'
import './Navbar.css'
import { Link } from 'react-router-dom'
import Body from './Body'
import { selectUser } from './user'
import { useSelector } from 'react-redux'
function Navbar() {
    const user = useSelector(selectUser)
    console.log(user)
    return (
        <div className = 'navbar'>
            <header className = 'navbar-header'>
                <div className = 'navbar-logo'>
                    <Link to = '/' >
                        <h3 style ={{color:'blue',cursor:"pointer"}} className= 'logo'>EduForum.com</h3>
                    </Link>
                </div>
                <a href="#">About</a>
                <a href="#">Help</a>
                <div className ="dropdown-user">
                    <Avatar src={user.photourl}/>
                    <h5>{user.displayName}</h5>
                </div>

            </header>
            
        </div>
    )
}

export default Navbar
