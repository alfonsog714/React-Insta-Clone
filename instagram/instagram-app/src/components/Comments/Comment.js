import React from "react";
import "./comment.css";

const Comment = props => {
  return (
    <div className="comment-message">
      <span className="username">{props.comment.username}</span>{" "}
      <span className="comment">{props.comment.text}</span>
    </div>
  );
};

export default Comment;
