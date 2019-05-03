import React from "react";
import styled from "styled-components";

const LikeSectionDiv = styled.div`
  padding: 0.4rem;
`;

const LikeSectionLikes = styled.p`
  margin-top: 5px;
`;

const LikeSectionHeart = styled.i`
  cursor: pointer;
`;

const LikeSection = props => {
  return (
    <LikeSectionDiv>
      <LikeSectionHeart className="far fa-heart" onClick={props.addLike} />
      <LikeSectionLikes>{props.likes} likes</LikeSectionLikes>
    </LikeSectionDiv>
  );
};

export default LikeSection;
