import { useEffect } from "react";
import { userList } from "../redux/services/actions/userAction";
import { connect } from "react-redux";
const Users = ({ userList, loading, users, error }) => {
  useEffect(() => {
    userList();
  }, []);
  return (
    <div>
      {loading ? (
        <h3>Loading........</h3>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <p>
          {users.map((user) => (
            <p>{user.title}</p>
          ))}
        </p>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  loading: state.httpRequest.loading,
  users: state.httpRequest.users,
  error: state.httpRequest.error,
});
export default connect(mapStateToProps, { userList })(Users);
