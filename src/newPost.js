import { createSlice } from "@reduxjs/toolkit";
export const newPost = createSlice(
    {
        name:'post',
        initialState:{
            selectpost:null,
            sendpostOpen:false,
        },
        reducers:{
            OpenselectedPost:(state ,action)=>{
                state.selectpost = action.payload;
            },
            OpenPost:(state)=>{
                state.sendpostOpen = true;
            },
            Closepost:(state)=>{
                state.sendpostOpen = false;
            }
        },
    },
);

export const { OpenselectedPost,OpenPost,Closepost } = newPost.actions
export const selectOpenselectedPost =(state)=>state?.post?.selectpost
export const selectSendPostOpen = (state) => state.post.sendpostOpen
export default newPost.reducer