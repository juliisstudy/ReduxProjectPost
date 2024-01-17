import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";


const PostsList =()=>{
    const posts =  useSelector(selectAllPosts); 

    const orderedPosts = posts.slice().sort((a,b)=>b.date.localeCompare(a.date));
    const renderedPosts = orderedPosts.map(post=>(
        <article key={post.id}>
            <p>{post.title}</p>
            <p>{post.content.substring(0,100)}</p>
            <PostAuthor userId={post.userId}/>
            <TimeAgo timestamp={post.date}/>
            <ReactionButtons post={post}/>
        </article>
    ))
    return(
        <section>
            {renderedPosts}
        </section>
    )

}
export default PostsList