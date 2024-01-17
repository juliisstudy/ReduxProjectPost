import {useState} from "react"
import { useDispatch } from "react-redux";
import { nanoid} from "@reduxjs/toolkit";
import { postAdded } from "./postsSlice";

const AddPostForm =() =>{
    const[title,setTitile ] = useState("");
    const [content, setContent] = useState("");

    const onTitleChanged = e =>setTitile(e.target.value);
    const onContentChanged = e=>setContent(e.target.value);

    const dispatch = useDispatch();

    const onSave = ()=>{
        if(title&&content){
            dispatch(postAdded({
                id:nanoid(),
                title,
                content,
            }))
            setTitile("")
            setContent("")
        }
    }
    return (
        <section>
            <form>
                <label htmlFor="postTitle">Post title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name ="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                 <label htmlFor="postContent">Post content:</label>
                <textarea
                    type="text"
                    id="postContent"
                    name ="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <button type="button" onClick ={onSave}>Save</button>
            </form>
        </section>
    )
}
export default AddPostForm