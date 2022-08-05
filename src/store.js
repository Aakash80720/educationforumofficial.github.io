import { configureStore } from "@reduxjs/toolkit";
import postreducer from './newPost'
import userreducer from './user'
export default configureStore({
    reducer:{
        post:postreducer,
        user:userreducer,
    },
})