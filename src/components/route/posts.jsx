import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div style={{ marginLeft: "500px" }}>
      <h1>Post</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h5>{post.title}</h5>
          <Link to={`posts/${post.id}`}>click for details {post.id}</Link>
        </div>
      ))}
    </div>
  );
};

export default Posts;
