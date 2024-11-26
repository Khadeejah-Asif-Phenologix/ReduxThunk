import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment, decrement, reset, incrementByAmount} from './counterSlice'

const Counter = () => {
    const [incrementAmount, seticrementAmount] = useState(0);

    const AddValue = Number(incrementAmount) || 0;

    const resetAll = () =>{
        seticrementAmount(0);
        dispatch(reset());
    }
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter - {count}</h1>

    <button onClick={()=>dispatch(increment())}> Increment + </button>
    <button onClick={()=>dispatch(decrement())}> Decrement - </button>

    <div>
        <input type="text" value={incrementAmount} onChange={(e)=>seticrementAmount(e.target.value)} />

        <button onClick={()=>dispatch(incrementByAmount(AddValue))}>Add Value</button>

        <button onClick={resetAll}>Reset</button>
    </div>
    </div>
  )
}

export default Counter
