import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import db from './firebase'
import './Sidebarchat.css'

function Sidebarchat({id,name}) {
    const [state, setstate] = useState("")
    const history = useHistory();
    useEffect(() => {
        if(id){
            db.collection('subjects').doc(id).collection('messages').orderBy('timestamp','asc').onSnapshot(snapshot =>(
                setstate(snapshot.docs.map((doc)=>doc.data()))
            ))
        }
        return () => {
            // cleanup
        }
    }, [id])
    console.log(state)    
    return (
        <div  className = "sidebarchat">
            <Link className ="Links" to ={`/Subjects/${id}`}>
                <p>{name}</p>
            </Link>
            
        </div>
    )
}

export default Sidebarchat
