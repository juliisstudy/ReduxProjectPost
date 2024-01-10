import {useSelector,useDispatch} from "react-redux";
import { increment,decrement,reset,incrementByAmount } from "./counterSlice";
import {useState}from "react";

const Counter =()=>{
    const count = useSelector((state)=>state.counter.count);
    const dispatch = useDispatch();

    const [incrementAmount,setIncrementByAmount] = useState(0);
    const addValue = Number(incrementAmount)||0;
    const resetAll=()=>{
        setIncrementByAmount(0);
        dispatch(reset());

    }

    return (
        <>
        <p>{count}</p>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>
        <input type = "text" value={incrementAmount}
        onChange={(e)=>setIncrementByAmount(e.target.value)}/>
        <button onClick={resetAll}>resetall</button>
        <button onClick={()=>dispatch(incrementByAmount(addValue))}>incrementbyAmount</button>
        </>

    )
}
export default Counter