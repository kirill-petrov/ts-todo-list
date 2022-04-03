import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
} from '../../redux/reducers/counterReducer';

function Counter() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>

      <button
        type="button"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        type="button"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <button
        type="button"
        onClick={() => dispatch(incrementByAmount(33))}
      >
        Decrement by 33
      </button>
    </div>
  );
}

export default Counter;
