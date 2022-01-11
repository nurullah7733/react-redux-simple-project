import React, { useContext } from "react";
import { CountContext } from "../App";

const X = () => {
  const countContext = useContext(CountContext);
  return (
    <div>
      <h1>this x- {countContext.count} component</h1>
      <button onClick={() => countContext.setCount("increment")}>
        increment
      </button>
      <button onClick={() => countContext.setCount("decrement")}>
        decrement
      </button>
      <button onClick={() => countContext.setCount("reset")}>reset</button>
    </div>
  );
};

export default X;
