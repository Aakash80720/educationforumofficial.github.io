import { SearchOutlined } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import db from "./firebase"
import "./Sidebar.css"
import Sidebarchat from './Sidebarchat'
// import Sidebarchat from './Sidebarchat'
// import { useStateValue } from './Stateprovider'
function Sidebar() {
    const [room, setRoom] = useState([])
    useEffect(() => {
        const unsubscribe = db.collection('subjects').onSnapshot(snapshot =>(
            setRoom(snapshot.docs.map(doc =>(
                {
                    id:doc.id,
                    data:doc.data(),
                }
            )))
        ))
        // {effect}
        return () => {
            // cleanup
            unsubscribe()
        }
    }, [])
    return (
        <div className ="sidebar">
            <div className ="sidebar-search">
                <div className ="sidebar-searchcontainer">
                    <SearchOutlined/>
                    <input placeholder="Search..." type ="text"/>
                </div>
                
            </div>
            <div className ="sidebar-chats">
                <h3 className = 'title'>Subjects</h3>
                {room.map(r =>(
                    <Sidebarchat id = {r.id} key = {r.id} name = {r.data.name}/>
                ))}
            </div>
        </div>
    )
}

export default Sidebar
