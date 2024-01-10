import {useSelector,useDispatch} from "react-redux";
import { increment,decrement } from "./counterSlice";

const Counter =()=>{
    const count = useSelector((state)=>state.counter.count);
    const dispatch = useDispatch();
    return (
        <>
        <p>{count}</p>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>
        </>
    )
}
export default Counter