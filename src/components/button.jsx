import React from "react";

const Button = ({ text, increment }) => {
  console.log("button" + text);
  return (
    <div>
      <button onClick={() => increment()}>{text}</button>
    </div>
  );
};

export default React.memo(Button);
