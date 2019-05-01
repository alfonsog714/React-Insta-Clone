import React, { Component } from "react";
import posts from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBarContainer";
import PostContainer from "./components/Posts/PostContainer";
import "./App.css";

class App extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.setState({ posts });
  }

  render() {
    // console.log(this.state);
    return (
      <div className="app">
        <SearchBar />
        <PostContainer posts={posts} />
      </div>
    );
  }
}

export default App;
