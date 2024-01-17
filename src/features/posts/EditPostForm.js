import {useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { selectPostById,updatePost,deletePost } from './postsSlice'
import {useParams,useNavigate} from'react-router-dom'
import {selectAllUsers} from '../user/usersSlice'

const EditPostForm=()=>{
    const {postId} = useParams();
    const navigate = useNavigate();
    const post = useSelector((state)=>selectPostById(state,Number(postId)))
    const users = useSelector(selectAllUsers)
    
    const[title,setTitle] = useState(post?.title)
    const[content,setContent] = useState([post?.content])
    const[userId,setUserId] = useState([post?.userId])
    const[requestStatus,setRequstStatus] = useState('idle')
    const dispatch = useDispatch()

    if(!post){
        return(
            <section>
                <p>not found</p>
            </section>
        )
    }

    const onTitleChange = (e)=>setTitle(e.target.value)
    const onContentChange = (e)=>setContent(e.target.value)
    const onAuthorChange = (e) =>setUserId(e.target.value)

    const canSave = [title,content,userId].every(Boolean)&&requestStatus==='idle'
    const onSavePostClick=()=>{
        if(canSave){
            try{
                setRequstStatus('pending')
                dispatch(updatePost({id:post.id,title,body:content,userId,reactions:post.reactions})).unwrap()
                setTitle("")
                setContent("")
                setUserId("")
                navigate(`/post/${postId}`)
            }catch(err){
                console.error("faled to save the post",err)
            }finally{
                setRequstStatus('idle')
            }
        }
    }
    const usersOptions = users.map(user =>(
        <option
            key={user.id}
            value = {user.id}
            >{user.name}</option>
    ))
    const onDeletePostClicked = ()=>{
        try{
            setRequstStatus('pending')
            dispatch(deletePost({id:post.id})).unwrap()
            setTitle('')
            setContent('')
            setUserId('')
            navigate('/')
        }catch(err){
            console.error('failed to delete the post',err)
        }finally{
            setRequstStatus('idel')
        }
    }
    return (
        <section>
            <h2>Edit Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChange}
                />
                <label htmlFor="postAuthor">Author:</label>
                <select id="postAuthor" value={userId} onChange={onAuthorChange}>
                    <option value=""></option>
                    {usersOptions}
                </select>
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChange}
                />
                <button
                    type="button"
                    onClick={onSavePostClick}
                    disabled={!canSave}
                >
                    Save Post
                </button>
                <button className="deleteButton"
                    type="button"
                    onClick={onDeletePostClicked}
                >
                    Delete Post
                </button>
            </form>
        </section>
    )

}
export default EditPostForm