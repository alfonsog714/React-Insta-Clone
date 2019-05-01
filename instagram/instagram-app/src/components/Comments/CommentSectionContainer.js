import React from "react";
import Comment from "./Comment";
import CommentInput from "./CommentInput";
import "./comment.css";

class CommentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: ""
    };
  }

  changeComment = e => {
    this.setState({
      comment: e.target.value
    });
  };

  submitComment = e => {
    e.preventDefault();
    this.setState({
      comments: [
        ...this.state.comments,
        {
          id: 37,
          username: "Alfonso",
          text: this.state.comment
        }
      ],
      comment: ""
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="comment-section">
        {this.state.comments.map(c => (
          <Comment comment={c} />
        ))}
        <CommentInput
          comment={this.state.comment}
          submitComment={this.submitComment}
          changeComment={this.changeComment}
        />
      </div>
    );
  }
}

export default CommentContainer;
