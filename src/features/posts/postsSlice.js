import {createSlice} from "@reduxjs/toolkit";

const initialState =[
    {id:'1',title:'learning redux',content:'good'},
    {id:'2',title:'learning redux',content:'good'}
]
const postsSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{}
})
export const selectAllPosts = (state)=>state.posts;

export default postsSlice.reducer;