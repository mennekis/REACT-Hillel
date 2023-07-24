import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Post = () => {
  const { postId } = useParams();

  const [post, setPost] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        if (!response.ok) {
          throw new Error("Failed fetching data");
        }
        const data = await response.json();
        setPost(data);
      } catch (e) {
        console.log(e.message);
      }
    };
    getPost();
  }, [postId]);

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <Link to="/articles">Back to the articles</Link>
    </div>
  );
};

export default Post;
