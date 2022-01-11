import useCustomHooks from "./useHooks";

const Two = () => {
  const [count, increment, decrement] = useCustomHooks();
  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => increment()}>increment</button>
      <button onClick={() => decrement()}>decrement</button>
    </div>
  );
};

export default Two;
