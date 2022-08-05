import { Avatar } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import { OpenselectedPost } from './newPost'
import './PostRow.css'
function PostRow({topic,user,briefNote,img,time,profile}) {
    const dispatch = useDispatch()
    const history = useHistory()
    const OpenPost = ()=>{
        dispatch(OpenselectedPost(
            {
                topic:topic,
                user:user,
                briefNote:briefNote,
                img:img,
                time:time,
                profile:profile,
            }
        ))
        history.push(`/query`)
    }
    return (
        <div className ="postrow">
            <div className ="row-containner" style={{marginBottom:"10px"}}>
                <div className ="row-header">
                    <Avatar className ="profile" src={profile}/>
                    <p style={{marginLeft:'10px'}} className ="user">{user}</p>
                    <p className ="time">{time}</p>
                </div>
                <h4>{topic}</h4>
                <div className = 'image'>
                    { img && <img className="images" src ={img} alt ="image src failed"/>}
                </div>
                <div className ="briefNote">
                    <p>{briefNote}</p>
                </div>
                <p onClick={OpenPost} style={{color:'cornflowerblue',cursor:'pointer'}}>View More</p>
            </div>
        </div>
    )
}

export default PostRow
