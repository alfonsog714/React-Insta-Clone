import React from "react";
import "./comment.css";

const Comment = props => {
  // console.log(props.comment);
  return (
    <div className="comment">
      <p>
        <span className="comment-username">{props.comment.username}</span>{" "}
        {props.comment.text}
      </p>
    </div>
  );
};

export default Comment;
