import { useDispatch, useSelector } from "react-redux";
import { selectAllPosts,getPostsError,getPostsStatus,fetchPosts } from "./postsSlice";
import { useEffect } from "react";
import PostsExcerpt from "./PostsExcerpt";

const PostsList = () => {
    const dispatch = useDispatch();

    const posts = useSelector(selectAllPosts)
    const postStatus = useSelector(getPostsStatus)
    const error = useSelector(getPostsError)

    useEffect(()=>{
        if(postStatus ==='idle'){
            dispatch(fetchPosts())
        }
    },[postStatus,dispatch])

    let content;

    if(postStatus==='loading'){
        content = <p>"loading..."</p>

    }else if(postStatus ==='succeeded'){
        content = posts.map(post=><PostsExcerpt key={post.id} post={post}/>)
    }else if (postStatus==='failed'){
        content =<p>{error}</p>
    }

    

    return (
        <section>
           {content}
        </section>
    )
}
export default PostsList