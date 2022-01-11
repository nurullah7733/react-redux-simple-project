import React, { useCallback, useMemo, useState } from "react";
import Button from "./button";
const ParentComp = () => {
  const [id, setId] = useState(0);
  const [count, setCount] = useState(0);

  const incrementId = useCallback(() => {
    setId(id + 1);
  }, [id]);

  const incrementCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const isEven = useMemo(() => {
    return id % 2 === 0;
  }, [id]);

  return (
    <div>
      <p>countd: {id} </p>
      <p>id: {count} </p>
      <p>{isEven ? "Even" : "Odd"}</p>
      <Button text="id" increment={incrementId} />
      <Button text="count" increment={incrementCount} />
    </div>
  );
};

export default ParentComp;
