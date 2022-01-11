import { connect } from "react-redux";
import { increment, decrement } from "./services/actions/counterActions";

const Counter = ({ increment, decrement, count }) => {
  return (
    <div>
      <h3>Count: {count} </h3>
      <button onClick={() => increment(5)}>increment</button>
      <button onClick={() => decrement(1)}>decrement</button>
    </div>
  );
};

const mapStatetoProps = (state) => ({
  count: state.counterReducer.count,
});

export default connect(mapStatetoProps, { increment, decrement })(Counter);
