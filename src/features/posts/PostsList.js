import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";

const PostsList =()=>{
    const posts =  useSelector(selectAllPosts); 
    const renderedPosts = posts.map(post=>(
        <article key={post.id}>
            <p>{post.title}</p>
            <p>{post.content.substring(0,100)}</p>
        </article>
    ))
    return(
        <section>
            {renderedPosts}
        </section>
    )

}
export default PostsList