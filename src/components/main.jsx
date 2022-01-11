import React from "react";
import { UserConsumer } from "./userContext";

class Main extends React.Component {
  state = {
    name: " ",
    comment: " ",
    color: " ",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submit = (e) => {
    e.preventDefault();
    alert(`${this.state.name} ${this.state.comment} ${this.state.color}`);
    e.target.reset();
    this.setState({ name: " ", comment: " ", color: " " });
  };

  render() {
    return (
      <div>
        <h4>alhamdulillah</h4>
        <UserConsumer>{(value) => <h4>{value}</h4>}</UserConsumer>
        <form onSubmit={this.submit}>
          <div>
            <label htmlFor="">Name</label>
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="">comment</label>
            <textarea
              name="comment"
              value={this.state.comment}
              id=""
              cols="30"
              rows="10"
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div>
            <select
              name="color"
              id=""
              value={this.state.color}
              onChange={this.handleChange}
            >
              <option value="red">Red</option>
              <option value="green">green</option>
              <option value="blue">blue</option>
            </select>
          </div>
          <button type="submit"> submit</button>
        </form>
      </div>
    );
  }
}

export default Main;
