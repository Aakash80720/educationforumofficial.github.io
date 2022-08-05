import { Avatar, Button, IconButton } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './Body.css'
import { useHistory } from 'react-router';
import db from './firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './user';

function Body() {
    const history = useHistory();
    const [Post, setPost] = useState([])
    const user = useSelector(selectUser)
    useEffect(() => {
        db.collection('subjects').doc('REST').collection('post').orderBy('timestamp','desc').onSnapshot(
            (snap) => setPost(snap.docs.map((doc=>doc.data())))
        )
        // effect
        return () => {
            // cleanup
        }
    }, ['REST'])
    const data = Array.from(Post)
    console.log(data)
    return (
        <div className = 'body'>
            <div className = 'body-content'>
                <div className = 'body-intro'>
                    <div className = 'intro-content'>
                        <h3>EDUFORUM</h3>
                        
                        <img src ="https://static.wixstatic.com/media/528c35_1829c744006240bb9b400c8803dc2d74~mv2.png/v1/fill/w_925,h_651,al_c,q_90,usm_0.66_1.00_0.01/528c35_1829c744006240bb9b400c8803dc2d74~mv2.webp" alt ='into'/>
                        <p>Join in the conversation. In the forum, you can talk to other students about courses, schools, admission requirements, study experiences and other questions about studying abroad. <br/>

                                Please note: Every post is monitored and approved before being added to the forum</p>
                        <Button onClick = {()=>history.push('/Post') }>Post a Queries</Button>
                    </div>
                
                </div>
                <div className = 'recent-post'>
                    <h3>RECENT QUERIES</h3>
                    {
                        data.slice(0,3).map(d =>(
                            <div className = 'post' onClick={()=> history.push('/Subjects/REST')} >
                            <div className = 'userDetails'>
                                <Avatar src={d.profile}  style = {{width :'30px' , height:'30px'}} />
                                <p>{d.Topic}</p>
                                <p style = {{color : 'lightgray'}}>{new Date(d.timestamp?.toDate()).toUTCString()}</p>
                                 </div>
                            <p style ={{fontSize:"12px"}}>{d.briefNote}</p>
                        </div>
                        ))
                    }
                </div>
            </div>
            <div className = 'body-features'>
                <div className = 'containers'>
                    <div className = 'cards'>
                        <h2>01</h2>
                        <h3>Features</h3>
                        <p>Join in the conversation. In the forum, you can talk to other students about courses, schools, admission requirements, study experiences and other questions about studying abroad. <br/>
                            Please note: Every post is monitored and approved before being added to the forum</p>
                    </div>
                    <div className = 'cards'>
                    <h2>02</h2>
                    <h3>Features</h3>
                        <p>Join in the conversation. In the forum, you can talk to other students about courses, schools, admission requirements, study experiences and other questions about studying abroad. <br/>
                            Please note: Every post is monitored and approved before being added to the forum</p>
                    </div>
                    <div className = 'cards'>
                    <h2>03</h2>
                    <h3>Features</h3>
                        <p>The conversation then is typically searchable, and accessible by others in the community over a long period of time.
                             Forums make it easy to organize conversations into specific categories or topics, and see trending or recent content.</p>
                    </div>
                </div>                    
            </div>
        </div>
    )
}

export default Body
