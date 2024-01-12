import {useState} from "react"
import { useDispatch, useSelector } from "react-redux";
import { addNewPost } from "./postsSlice";
//import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../user/usersSlice";

const AddPostForm =() =>{
    const dispatch = useDispatch();

    const [title,setTitle] = useState("");
    const [content,setContent] = useState("")
    const [userId,setUserId] =useState("")
    const [addRequestStatus,setAddRequestStatus] = useState('idle')

    const users = useSelector(selectAllUsers)
    const onTitleChange = (e)=>setTitle(e.target.value)
    const onContentChange = (e)=>setContent(e.target.value)
    const onAuthorChange =(e)=> setUserId(e.target.value)

    const canSave =[title,content,userId].every(Boolean)&&addRequestStatus ==='idle';
    
    const onSave=()=>{
           if(canSave){
            try{
                setAddRequestStatus('pending')
                dispatch(addNewPost({title,body:content,userId})).unwrap()
                setTitle('')
                setContent('')
                setUserId('')
            }catch(err){
                console.error('Failed to save the post',err)
            }finally{
                setAddRequestStatus('idle')
            }
           }
    }
    const usersOptions = users.map(user=>(
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

    return (
        <div>
            <h1>Posts</h1>
            <label htmlFor="PostTitle">Title</label>
            <input type="text" id="postTitle" name="postTitle"
            value={title} onChange={onTitleChange}/>
            
            <label htmlFor="postAuthor">author:</label>
            <select id="postAuthor" value={userId} onChange={onAuthorChange}>
                <option value=""></option>
                    {usersOptions}
            </select>


            <label htmlFor='PostContent'>Content</label>
            <textarea type="text" id="postConent" name = "postContent"
            value={content} onChange={onContentChange}/>
            <button onClick={onSave} disabled={!canSave}>save</button>
        </div>
    )
}
export default AddPostForm