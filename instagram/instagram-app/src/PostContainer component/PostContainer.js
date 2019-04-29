import React from "react";
import Comment from "../CommentSection component/CommentComponent";

const PostContainer = props => {
  return (
    <div className="post-container">
      <div className="post header">
        <img src={props.user.thumbnailUrl} /> {props.user.username}
      </div>
      <img src={props.user.imageUrl} />
      <div className="post-icons">tetetetet</div>
      <div className="likes-info">
        <p>{props.user.likes} likes</p>
      </div>
      <Comment />
    </div>
  );
};

export default PostContainer;
