import React from "react";

const LikeSection = props => {
  return (
    <div className="like-section">
      <i className="far fa-heart" onClick={props.addLike} />
      <p>{props.likes} likes</p>
    </div>
  );
};

export default LikeSection;
