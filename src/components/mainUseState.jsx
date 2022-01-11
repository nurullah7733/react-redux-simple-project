import { useState } from "react";
import { UserConsumer } from "./userContext";

const Main = () => {
  const [info, setInfo] = useState({
    id: "",
    name: "",
    comment: "",
    color: " ",
  });

  const submit = (e) => {
    e.preventDefault();

    // alert(`${this.state.name} ${this.state.comment} ${this.state.color}`);
    // e.target.reset();
    // this.setState({ name: " ", comment: " ", color: " " });
  };

  return (
    <div>
      <h4>alhamdulillah</h4>
      <UserConsumer>{(value) => <h4>{value}</h4>}</UserConsumer>
      <form onSubmit={submit}>
        <div>
          <label htmlFor="">Id</label>
          <input
            name="id"
            type="text"
            value={info.id}
            onChange={(e) => setInfo({ ...info, id: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="">Name</label>
          <input
            name="name"
            type="text"
            value={info.name}
            onChange={(e) => setInfo({ ...info, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="">comment</label>
          <textarea
            name="comment"
            value={info.comment}
            id=""
            cols="30"
            rows="10"
            onChange={(e) => setInfo({ ...info, comment: e.target.value })}
          ></textarea>
        </div>
        <div>
          <select
            name="color"
            id=""
            value={info.color}
            onChange={(e) => setInfo({ ...info, color: e.target.value })}
          >
            <option value="red">Red</option>
            <option value="green">green</option>
            <option value="blue">blue</option>
          </select>
        </div>
        <button type="submit"> submit</button>
      </form>
      <p>{info.id}</p>
      <p>{info.name}</p>
      <p>{info.comment}</p>
      <p>{info.color}</p>
    </div>
  );
};

export default Main;
