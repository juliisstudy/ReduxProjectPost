import {createSlice} from "@reduxjs/toolkit";
const initialState =[
    {id:'1',title:'learning',content:'good things'},
    {id:'2',title:'learning',content:'good things'},
]
const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers:{
        
    }
})

export const selectAllPosts=(state)=>state.posts;
export default postsSlice.reducer