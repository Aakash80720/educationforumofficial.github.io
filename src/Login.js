import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { auth, provider } from './firebase'
import { useDispatch } from 'react-redux'
import { login } from './user'
import firebase from 'firebase'
function Login() {
    const dispatch = useDispatch()
    const signIn =()=>{
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)
        .then(() => {
            auth.signInWithPopup(provider).then((result) =>    
            dispatch(login({
                    displayName:result.user.displayName,
                    photourl: result.user.photoURL
                })
                )      
                ).catch((error) => alert(error.message)) 
        }).catch((error) => alert(error.message)) 
    }
    return (
        <div className ="login">
            <div className ="login-containner">

                <div className ="login-text">
                    <h1>Educational Forum</h1>
                </div>
                <Button type ="submit" onClick={signIn} >
                    Sign In With Google
                </Button>
            </div>
        </div>
    )
}

export default Login
