import useCustomHooks from "./useHooks";

const One = () => {
  const [count, increment, decrement] = useCustomHooks(5);
  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => increment()}>increment</button>
      <button onClick={() => decrement()}>decrement</button>
    </div>
  );
};

export default One;
