import React from "react";
import styled from "styled-components";

const PostHeaderStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 1rem;
  align-items: center;
`;

const PostThumbnailWrapper = styled.div`
  height: 50px;
  width: 50px;
`;

const UserImage = styled.img`
  height: 100%;
  border-radius: 50%;
`;

const UserName = styled.div`
  margin: 0 15px;
`;

const PostHeader = props => {
  return (
    <PostHeaderStyle>
      <PostThumbnailWrapper>
        <UserImage
          alt="User's profile image"
          className="user-image"
          src={props.thumbnailUrl}
        />
      </PostThumbnailWrapper>
      <UserName>{props.username}</UserName>
    </PostHeaderStyle>
  );
};

export default PostHeader;
