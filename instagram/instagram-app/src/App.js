import React, { Component } from "react";
import SearchBar from "./components/SearchBar component/SearchBar";
import PostContainer from "./components/PostContainer component/PostContainer";
import users from "./dummy-data";

class App extends Component {
  state = {
    users: users,
    comments: users.map(user => {
      return { comment: user.comments };
    })
  };

  addComment = comment => {
    this.setState({
      ...this.state,
      comments: [...this.state.comments, comment]
    });
  };

  render() {
    console.log(this.state.comments);
    return (
      <div className="app">
        <SearchBar />
        <div className="posts">
          {this.state.users.map(user => (
            <PostContainer
              user={user}
              key={user.id}
              comments={this.state.comments}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
