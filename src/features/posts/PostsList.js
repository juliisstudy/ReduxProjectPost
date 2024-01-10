import { useSelector } from "react-redux"
import { selectAllPosts } from "./postsSlice";

const PostsList = ()=>{
    const posts = useSelector(selectAllPosts);
    const renderPosts = posts.map((post)=>(
        <article key ={post.id}>
            <h1>{post.title}</h1>
            <p>{post.content.substring(0,100)}</p>
        </article>
    ))
    return (
        <>
        <h3>posts</h3>
        <section>{renderPosts}</section>
        </>
    )
}
export default PostsList