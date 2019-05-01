import React, { Component } from "react";
import posts from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBarContainer";
import PostContainer from "./components/Posts/PostContainer";
import "./App.css";

class App extends Component {
  state = {
    posts: [],
    searchPosts: []
  };

  componentDidMount() {
    this.setState({ posts });
  }

  searchPosts = e => {
    const filteredPosts = this.state.posts.filter(post => {
      if (post.username.includes(e.target.value)) {
        return post;
      }
    });
    this.setState({ searchPosts: filteredPosts });
  };

  render() {
    // console.log(this.state);
    return (
      <div className="app">
        <SearchBar searchPosts={this.searchPosts} />
        <PostContainer
          posts={
            this.state.searchPosts.length > 0
              ? this.state.searchPosts
              : this.state.posts
          }
        />
      </div>
    );
  }
}

export default App;
