import React from "react";
import PropTypes from "prop-types";
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

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string,
    text: PropTypes.string
  }).isRequired
};

export default Comment;
