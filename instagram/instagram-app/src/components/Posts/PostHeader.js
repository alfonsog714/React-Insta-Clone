import React from "react";

const PostHeader = props => {
  return (
    <div className="post-header">
      <div className="post-thumbnail-wrapper">
        <img
          alt="User's profile image"
          className="user-image"
          src={props.thumbnailUrl}
        />
      </div>
      <div className="user-name">{props.username}</div>
    </div>
  );
};

export default PostHeader;
