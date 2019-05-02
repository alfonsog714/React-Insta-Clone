import React, { Component } from "react";
import posts from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBarContainer";
import PostsPage from "./components/Posts/PostsPage";
import Login from "./components/Login/Login";
import withAuthenticate from "./authentication/withAuthenticate";
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
        <Auth
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

const Auth = withAuthenticate(PostsPage)(Login);

export default App;

// posts={
//   this.state.searchPosts.length > 0
//     ? this.state.searchPosts
//     : this.state.posts
