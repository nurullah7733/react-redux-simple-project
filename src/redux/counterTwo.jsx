import { useSelector, useDispatch } from "react-redux";

import { increment, decrement } from "./services/actions/counterActions";

const CounterTwo = () => {
  const count = useSelector((state) => state.counterReducer.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Count: {count} </h3>
      <button onClick={() => dispatch(increment(3))}>increment</button>
      <button onClick={() => dispatch(decrement(1))}>decrement</button>
    </div>
  );
};

export default CounterTwo;
