import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/" href="#">
        Home
      </Link>
      <Link to="/about" href="#">
        About
      </Link>
      <Link to="/posts" href="#">
        Posts
      </Link>
    </div>
  );
};

export default Navbar;
