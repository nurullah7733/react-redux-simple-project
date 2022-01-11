import React, { useReducer } from "react";

const initialState = {
  value: 0,
  value2: 12,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        value: state.value + action.value,
      };
    case "increment2":
      return {
        ...state,
        value2: state.value2 + action.value2,
      };
    case "decrement":
      if (state.value > 0 || state.value2 > 12) {
        return {
          ...state,
          value: state.value - action.value,
          value2: state.value2 - action.value,
        };
      }
    case "reset":
      return initialState;

    default:
      return state;
  }
};

const CustomReduce = () => {
  const [state, setState] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>{state.value}</h1>
      <h1>{state.value2}</h1>
      <button onClick={() => setState({ type: "increment", value: 1 })}>
        increment
      </button>
      <button onClick={() => setState({ type: "decrement", value: 1 })}>
        decrement
      </button>
      <button onClick={() => setState({ type: "reset" })}>Reset</button>
      <button onClick={() => setState({ type: "increment", value: 5 })}>
        Reset5
      </button>
      <button
        onClick={() => setState({ type: "increment2", value: 1, value2: 10 })}
      >
        increment2
      </button>
    </div>
  );
};

export default CustomReduce;
