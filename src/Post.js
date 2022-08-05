import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import firebase from 'firebase'
import './Post.css'
import { selectUser } from './user'
import db from './firebase'
import { Closepost } from './newPost'
import { useHistory } from 'react-router'
function Post() {
    const [state, setstate] = useState([])
    const { register,handleSubmit,watch,errors } = useForm()
    const history = useHistory()
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    console.log(user)
    const onSubmit=(data)=>{
        console.log(data.Subject)
        db.collection('subjects').doc(data.Subject).collection('post').add(
            {

                profile:user.photourl,
                Name:user.displayName,
                Topic:data.Topic,
                Image:data.Image,
                briefNote:data.BriefNote,
                timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            }
        )
        history.push(`/Subjects/${data.Subject}`)
    }
    
    return (
        <div className = 'posts'>
            <center><h2 className = 'headings'>Quaries</h2></center>
            <div className = 'post-fields'>
                
                    <form className = 'post-inputField' onSubmit={handleSubmit(onSubmit)} >
                        <p>Heading:</p>
                        <input
                        placeholder = 'Heading.....'
                        className = 'input-field' type = 'text'{...register('Topic', { required: true })} /><span>
                            <label>Subject:
                                <select value={state.value} className = 'input-field1' {...register('Subject', { required: true })} >
                                    <option value="choose">Subjects</option>
                                    <option value="HTML">HTML</option>
                                    <option value="C">C</option>
                                    <option value="JAVASCRIPT">JAVASCRIPT</option>
                                    <option value="DBMS">DBMS</option>
                                    <option value="C++">C++</option>
                                    <option value="PYTHON">PYTHON</option>
                                    <option value="JAVA">JAVA</option>
                                    <option value="REST">OTHERS</option>
                                </select>
                            </label>
                        </span>
                        
                        
                        <p>Web Image:</p>
                        <input type = 'text' className = 'input-field'
                        placeholder = 'Paste the image URL!!....' {...register('Image')}
                        />
                        <p>Queries:</p>
                        <textarea rows ='10' placeholder = 'Ask a Quary?....' className ='text-field' {...register('BriefNote', { required: true })} ></textarea>
                        <br/>
                        <center>
                            <Button type='submit' className='submit' >POST</Button>
                        </center>
                        
                    </form>
                    <div className = 'attachment-box'>
                        
                    </div>
                    
            </div>
            
        </div>
    )
}

export default Post
