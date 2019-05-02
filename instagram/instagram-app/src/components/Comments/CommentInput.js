import React from "react";
import styled from "styled-components";

const CommentForm = styled.form`
  margin-top: 10px;
`;

const CommentInputStyle = styled.input`
  border-style: none;
  border-top: 1px solid rgb(204, 203, 203);
  padding: 1rem;
  font-size: 1rem;
  width: 100%;
`;

const CommentInput = props => {
  return (
    <CommentForm onSubmit={props.submitComment}>
      <CommentInputStyle
        type="text"
        value={props.comment}
        placeholder="Add comment..."
        onChange={props.changeComment}
      />
    </CommentForm>
  );
};

export default CommentInput;
