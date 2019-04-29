import React, { Component } from "react";
import SearchBar from "./SearchBar component/SearchBar";
import PostContainer from "./PostContainer component/PostContainer";
// import Comment from "./CommentSection component/CommentComponent";
import users from "./dummy-data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users
    };
  }

  render() {
    return (
      <div className="app">
        <SearchBar />
        <div className="posts">
          {this.state.users.map(user => (
            <PostContainer user={user} key={user.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
