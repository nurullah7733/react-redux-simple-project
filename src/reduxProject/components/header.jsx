import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div style={{ marginTop: "20px" }}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1>FakeShope API</h1>
      </Link>
      <hr />
    </div>
  );
};

export default Header;
