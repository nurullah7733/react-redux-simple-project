import React from "react";
import { UserConsumer } from "./userContext";

class RefDemo extends React.Component {
  state = {
    name: "",
  };
  inputRef = React.createRef();
  handleChage = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  submit = (e) => {
    e.preventDefault();
    console.log(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <div>
          <UserConsumer>
            {(value) => {
              return <h1>{value}</h1>;
            }}
          </UserConsumer>
        </div>
        <form onSubmit={this.submit}>
          <div>
            <input
              ref={this.inputRef}
              type="text"
              name="name"
              onChange={this.handleChage}
            />
            <textarea type="text" onChange={this.handleChage}></textarea>
            <button type="submit">sub</button>
          </div>
        </form>
      </div>
    );
  }
}

export default RefDemo;
