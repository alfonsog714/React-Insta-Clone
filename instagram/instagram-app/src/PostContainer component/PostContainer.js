import React from "react";
import Comment from "../CommentSection component/CommentComponent";
import "./postContainer.css";

const PostContainer = props => {
  return (
    <div className="post-container">
      <div className="post header">
        <img src={props.user.thumbnailUrl} /> {props.user.username}
      </div>
      <img src={props.user.imageUrl} />
      <div className="post-icons">
        <i className="fas fa-heart" />
        <i className="fas fa-comment-dots" />
      </div>
      <div className="likes-info">
        <p>{props.user.likes} likes</p>
      </div>
      <div className="comment-section">
        {props.user.comments.map(comment => (
          <Comment comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default PostContainer;
