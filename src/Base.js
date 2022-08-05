import React, { useEffect, useState } from 'react'
import "./Base.css"
import { useParams } from 'react-router-dom'
import { Add, SearchOutlined } from '@material-ui/icons'
import Send from './Send'
import { useDispatch, useSelector } from 'react-redux'
import { OpenPost, selectSendPostOpen } from './newPost'
import { IconButton } from '@material-ui/core'
import PostRow from './PostRow'
import db from './firebase'

function Base() {
    const { roomId } = useParams()
    const [data, setdata] = useState([])
    const sendpostOpen = useSelector(selectSendPostOpen)
    const dispatch = useDispatch()
    useEffect(() => {
        db.collection('subjects').doc(roomId).collection('post').orderBy('timestamp','desc').onSnapshot(
            (snapshot)=> setdata(snapshot.docs.map((doc=>doc.data())))
        )
        //effect
        return () => {
            //cleanup
        }
    }, [roomId])
    console.log(data)
    const datas = Array.from(data); 
    return (
        <div className = 'base'>
            <center>
                <div className="base-body">
                    <div className ="post-questions" onClick ={()=>dispatch(OpenPost())}>
                        <Add/>
                        <p style ={{marginLeft:"20px"}}>Post A Query</p>
                    </div>
                    <div className ="search-block">
                        <IconButton>
                            <SearchOutlined/>
                        </IconButton>
                        <input type="text" placeholder="Search.." className="search-bar"/>
                    </div>
                 </div>
            </center>
                {sendpostOpen && <Send/>}
                {
                    datas?.map(d =>(
                        <PostRow 
                        user = {d.Name}
                        topic= {d.Topic}
                        briefNote = {d.briefNote}
                        img = {d.Image}
                        time = {new Date(d.timestamp?.toDate()).toUTCString()}
                        profile = {d.profile}
                        />
                    ))
                }

            

        </div>
    )
}

export default Base
