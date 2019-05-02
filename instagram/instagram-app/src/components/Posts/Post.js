import React, { Component } from "react";
import PostHeader from "./PostHeader";
import LikeSection from "./LikeSection";
import CommentContainer from "../Comments/CommentSectionContainer";
// import "./posts.css";
import styled from "styled-components";
import PropTypes from "prop-types";

const PostOutline = styled.div`
  border: 1px solid #d3d3d3;
  margin: 15px 0;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`;

const ImageWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const PostImage = styled.img`
  width: 100%;
`;

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
      <PostOutline>
        <PostHeader
          username={this.props.post.username}
          thumbnailUrl={this.props.post.thumbnailUrl}
        />
        <ImageWrapper>
          <PostImage
            alt="user's post img"
            className="post-image"
            src={this.props.post.imageUrl}
          />
        </ImageWrapper>
        <LikeSection likes={this.state.likes} addLike={this.addLike} />
        <CommentContainer comments={this.props.post.comments} />
      </PostOutline>
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
