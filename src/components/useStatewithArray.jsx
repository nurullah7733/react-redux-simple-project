import { Fragment, useState } from "react";

const Arr = () => {
  const [lists, setList] = useState([]);

  const generateList = () => {
    setList([
      ...lists,
      {
        id: lists.length,
        value: Math.random(),
      },
    ]);
  };

  return (
    <div>
      <button onClick={() => generateList()}>Generate list</button>
      <div>{lists.id}</div>
      <div>
        <ul>
          {lists.map((list) => (
            <Fragment key={list.id}>
              <li>{list.id}</li>
              <li>{list.value}</li>
            </Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Arr;
