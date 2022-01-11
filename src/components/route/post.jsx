import axios from "axios";
import { useState, useEffect } from "react";

const Post = ({ match }) => {
  console.log("post");
  const [post, setPost] = useState({});
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`)
      .then((res) => setPost(res.data));
  }, [match.params.id]);
  return (
    <div>
      <h1>Single Post Only</h1>
      <h3>{post.id}</h3>
      <h4>{post.title}</h4>
      <h4>{post.body}</h4>
    </div>
  );
};

export default Post;
