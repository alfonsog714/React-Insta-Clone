import React from "react";
import PropTypes from "prop-types";
import Comment from "../CommentSection component/CommentComponent";
import "./postContainer.css";

const PostContainer = props => {
  return (
    <div className="post-container">
      <div className="post-header">
        <img src={props.user.thumbnailUrl} alt="user thumbnail" />{" "}
        {props.user.username}
      </div>
      <img src={props.user.imageUrl} alt="user post" />
      <div className="post-icons">
        <i className="fas fa-heart fa-lg" />
        <i className="fas fa-comment-dots fa-lg" />
      </div>
      <div className="likes-info">
        <p>{props.user.likes} likes</p>
      </div>
      <div className="comment-section">
        {props.user.comments.map(comment => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </div>
    </div>
  );
};

PostContainer.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.array
  }).isRequired
};

export default PostContainer;
