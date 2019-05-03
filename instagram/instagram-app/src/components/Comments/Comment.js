import React from "react";
import styled from "styled-components";
// import "./comment.css";

const CommentDiv = styled.div`
  padding: 0.3rem;
`;

const UsernameSpan = styled.span`
  font-weight: 650;
`;

const CommentSpan = styled.span`
  padding: 0.3rem;
`;

const Comment = props => {
  return (
    <CommentDiv>
      <UsernameSpan className="username">{props.comment.username}</UsernameSpan>{" "}
      <CommentSpan className="comment">{props.comment.text}</CommentSpan>
    </CommentDiv>
  );
};

export default Comment;
