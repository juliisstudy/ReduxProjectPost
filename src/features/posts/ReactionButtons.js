import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

const reactionEmoji ={
   
        thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
    
}

const ReactionButtons=({post})=>{


    const dispatch = useDispatch();
    const reactionButtons=Object.entries(reactionEmoji).map(([name,emoji])=>{
        return(
            <button key={name} type="button" 
            
            onClick={()=>dispatch(reactionAdded({postId:post.id, reaction: name }))}
            >
                {emoji}{post.reactions[name]}
            </button>
        )
    })
    return(
       <div>{reactionButtons}</div> 
    )
}
export default ReactionButtons