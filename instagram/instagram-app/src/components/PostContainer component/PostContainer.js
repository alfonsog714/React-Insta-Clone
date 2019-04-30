import React from "react";
import PropTypes from "prop-types";
import Comment from "../CommentSection component/CommentComponent";
import "./postContainer.css";

class PostContainer extends React.Component {
  state = {
    comment: ""
  };

  render() {
    // console.log(this.state.comments);
    return (
      <div className="post-container">
        <div className="post-header">
          <img src={this.props.user.thumbnailUrl} alt="user thumbnail" />{" "}
          {this.props.user.username}
        </div>
        <img src={this.props.user.imageUrl} alt="user post" />
        <div className="post-icons">
          <i className="fas fa-heart fa-lg" />
          <i className="fas fa-comment-dots fa-lg" />
        </div>
        <div className="likes-info">
          <p>{this.props.user.likes} likes</p>
        </div>
        <div className="comment-section">
          {this.props.comments.map(comment => (
            <Comment comment={comment} key={comment.id} />
          ))}
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Add a comment..."
              // value={this.state.comment}
              name="comment"
            />
          </form>
        </div>
      </div>
    );
  }
}

PostContainer.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.array
  }).isRequired
};

export default PostContainer;

// const PostContainer = props => {
//   return (
//     <div className="post-container">
//       <div className="post-header">
//         <img src={props.user.thumbnailUrl} alt="user thumbnail" />{" "}
//         {props.user.username}
//       </div>
//       <img src={props.user.imageUrl} alt="user post" />
//       <div className="post-icons">
//         <i className="fas fa-heart fa-lg" />
//         <i className="fas fa-comment-dots fa-lg" />
//       </div>
//       <div className="likes-info">
//         <p>{props.user.likes} likes</p>
//       </div>
//       <div className="comment-section">
//         {props.user.comments.map(comment => (
//           <Comment comment={comment} key={comment.id} />
//         ))}
//         <form>
//           <input type="text" placeholder="Add a comment..." />
//         </form>
//       </div>
//     </div>
//   );
// };

// class PostContainer extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     console.log(props)
//     return (
//       <div className="post-container">
//         <div className="post-header">
//           <img src={props.user.thumbnailUrl} alt="user thumbnail" />{" "}
//           {props.user.username}
//         </div>
//         <img src={props.user.imageUrl} alt="user post" />
//         <div className="post-icons">
//           <i className="fas fa-heart fa-lg" />
//           <i className="fas fa-comment-dots fa-lg" />
//         </div>
//         <div className="likes-info">
//           <p>{props.user.likes} likes</p>
//         </div>
//         <div className="comment-section">
//           {props.user.comments.map(comment => (
//             <Comment comment={comment} key={comment.id} />
//           ))}
//           <form>
//             <input type="text" placeholder="Add a comment..." />
//           </form>
//         </div>
//       </div>
//     );
//   }
// }
