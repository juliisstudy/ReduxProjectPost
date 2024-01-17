import {createSlice} from "@reduxjs/toolkit";

const initialState =[
    {id:'1',title:'learning redux',content:'good'},
    {id:'2',title:'learning redux',content:'good'}
]
const postsSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        //add new post
        postAdded(state,action){
            state.push(action.payload);//payload data add to the state
        }
    }
})
export const selectAllPosts = (state)=>state.posts;

export const {postAdded} = postsSlice.actions;

export default postsSlice.reducer;