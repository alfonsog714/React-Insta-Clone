import React, { Component } from "react";
import PostHeader from "./PostHeader";
import LikeSection from "./LikeSection";
import CommentContainer from "../Comments/CommentSectionContainer";
import "./posts.css";
import PropTypes from "prop-types";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes
    };
  }

  addLike = () => {
    let addedlikes = this.state.likes + 1;
    this.setState({ likes: addedlikes });
  };

  render() {
    return (
      <div className="post-outline">
        <PostHeader
          username={this.props.post.username}
          thumbnailUrl={this.props.post.thumbnailUrl}
        />
        <div className="image-wrapper">
          <img
            alt="user's post img"
            className="post-image"
            src={this.props.post.imageUrl}
          />
        </div>
        <LikeSection likes={this.state.likes} addLike={this.addLike} />
        <CommentContainer comments={this.props.post.comments} />
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number
  })
};

export default Post;
