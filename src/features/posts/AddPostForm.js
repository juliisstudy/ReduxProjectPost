import {useState} from "react"
import { useDispatch } from "react-redux";
import { postAdded } from "./postsSlice";

const AddPostForm =() =>{
    const dispatch = useDispatch();
    const [title,setTitle] = useState("");
    const [content,setContent] = useState("")

    const onTitleChange = (e)=>setTitle(e.target.value)
    const onContentChange = (e)=>setContent(e.target.value)

    const canSave = Boolean(title)&&Boolean(content);
    const onSave=()=>{
           if(title&&content){
                dispatch(
                    postAdded(title,content)
                )
                setTitle("")
                setContent("")
           } 
    }
    return (
        <div>
            <h1>Posts</h1>
            <lable htmlFor="PostTitle">Title</lable>
            <input type="text" id="postTitle" name="postTitle"
            value={title} onChange={onTitleChange}/>
            <label htmlFor='PostContent'>Content</label>
            <textarea type="text" id="postConent" name = "postContent"
            value={content} onChange={onContentChange}/>
            <button onClick={onSave} disabled={!canSave}>save</button>
        </div>
    )
}
export default AddPostForm