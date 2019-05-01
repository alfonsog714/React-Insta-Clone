import React from "react";
import Post from "./Post";
import "./posts.css";

const PostContainer = props => {
  return (
    <div className="posts-container-wrapper">
      <button onClick={props.logOut}>Log Out</button>

      {props.posts.map(post => (
        <Post post={post} />
      ))}
    </div>
  );
};

export default PostContainer;
