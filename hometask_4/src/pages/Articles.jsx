import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Articles = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error("Failed fetching data");
        }
        const data = await response.json();
        setPosts(data);
      } catch (e) {
        console.log(e.message);
      }
    };
    getAllPosts();
  }, []);

  return (
    <div>
      Articles page:
      <ul>
        {posts &&
          posts.map((post) => (
            <li key={post.id}>
              <Link className="post-title" to={`/articles/${post.id}`}>
                {post.title}
              </Link>
              <p>{post.body}</p>
              <hr />
            </li>
          ))}
      </ul>
      
    </div>
  );
};

export default Articles;
