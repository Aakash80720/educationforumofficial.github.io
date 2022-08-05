import { Button, IconButton } from '@material-ui/core'
import { Close, AttachFile } from '@material-ui/icons'
import React, { useState } from 'react'
import './Send.css'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Closepost } from './newPost'
import db from './firebase'
import { useParams } from 'react-router'
import firebase from 'firebase'
import { selectUser } from './user'
function Send(props) {
    const {roomId} = useParams()
    const [file, setfile] = useState([])
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const { register,handleSubmit,watch,errors } = useForm()
  const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const files = Array.from(e.target.files)
    setfile(...files)
  }
  console.log(roomId)
  const onSubmit=(data,e)=>{
      e.preventDefault();
      db.collection('subjects').doc(roomId).collection('post').add(
          {
              profile:user.photourl,
              Name:user.displayName,
              Topic:data.Topic,
              Image:data.Image,
              briefNote:data.BriefNote,
              timestamp:firebase.firestore.FieldValue.serverTimestamp(),
          }
      )
      dispatch(Closepost());
  }
    return (
        <div className = "send">
            <div className = 'send-header'>
                <h3>Query</h3>
                <IconButton className="closeIcons" hidden onClick = {()=> dispatch(Closepost())} >
                    <Close style={{color:"whitesmoke"}} className="send-closeIcon"/>
                </IconButton>
                
            </div>
            <form className ='sendquery' onSubmit={handleSubmit(onSubmit)} > 
                <input className ='send-input'  placeholder="Topic" type="text" {...register('Topic', { required: true })} />
                { errors?.Topic && (<p className='send-error'>Topic must filled</p>) } 
                <input className ='send-input' placeholder="Image URL(Paste Here)" type="text" {...register('Image')} />
                { errors?.Image && (<p className='send-error'>Image must filled</p>) } 
                <textarea rows ="6" placeholder="BriefNote" type="text" className="message" {...register('BriefNote', { required: true })} />
                { errors?.BriefNote && (<p className='send-error'>BreifNote must filled</p>) } 
                <div className ="file">
                <Button className="attach" component="label" hidden>
                        <AttachFile style={{color:"whitesmoke"}}/>
                        <input  {...register('files')} type="file" onChange={handleFileSelected} hidden/>
                      </Button>
                      {
                          file.name ?(
                            <div className = 'file'>
                                <p>file Name:</p>
                                <text style={{marginLeft:"10px"}}>{file?.name}</text>
                            </div>
                          ):(null)
                      }
                      
                </div>
                <div className ="send-options">
                    <Button variant='contained' color='primary' type='submit' style={{color:'whitesmoke'}}>Post</Button>
                </div>
            </form>
        </div>
    )
}

export default Send
