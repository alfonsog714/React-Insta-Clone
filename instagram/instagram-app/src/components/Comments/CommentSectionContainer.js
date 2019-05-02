import React from "react";
import Comment from "./Comment";
import CommentInput from "./CommentInput";
// import "./comment.css";
import PropTypes from "prop-types";

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
          <Comment key={c.id} comment={c} />
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

CommentContainer.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      username: PropTypes.username,
      text: PropTypes.string
    })
  )
};

export default CommentContainer;
