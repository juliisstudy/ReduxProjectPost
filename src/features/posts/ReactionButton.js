import { useDispatch } from "react-redux";
import {reactionAdded} from "./postsSlice";

const reactionEomji= {
    thumbsUp:0,
            wow:0,
            heart:0,
            rocket:0,
            coffee:0,
}

const ReactionButtons = ({post})=>{
    const dispatch = useDispatch()
    const ReactionButtons = Object.entries(reactionEomji).map(([name,emoji])=>{
        return(
            <button key={name} type="button" 
                onClick={()=>dispatch(reactionAdded({postId:post.id,reactions:name}))}
            >
                {emoji}{post.reactions[name]}
            </button>
        )
    })
    return <div>{ReactionButtons}</div>
}
export default ReactionButtons