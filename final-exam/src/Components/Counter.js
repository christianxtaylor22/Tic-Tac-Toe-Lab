import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../Redux/actions/counterActions';

function Counter() {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    return (
        <div className='counter-container'>
            <h1>Count: {count}</h1>
            <button onClick={()=> dispatch(increment())}>Increment</button>
            <button onClick={()=> dispatch(decrement())}>Decrement</button>
            <button onClick={()=> dispatch(reset())}>Reset</button>
        </div>
    );
}

export default Counter;