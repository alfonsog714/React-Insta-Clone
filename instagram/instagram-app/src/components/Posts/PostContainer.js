import React from "react";
import Post from "./Post";
// import "./posts.css";
import styled from "styled-components";

const PostContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  margin: 0 auto;
`;

const PostContainer = props => {
  return (
    <PostContainerWrapper>
      {props.posts.map(post => (
        <Post post={post} />
      ))}
      <button onClick={props.logOut}>Log Out</button>
    </PostContainerWrapper>
  );
};

export default PostContainer;
