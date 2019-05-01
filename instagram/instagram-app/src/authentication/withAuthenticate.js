import React from "react";

const withAuthenticate = PostsPage => LoginPage =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoggedIn: false
      };
    }

    componentDidMount() {
      if (!localStorage.getItem("user")) {
        this.setState({ isLoggedIn: false });
      } else {
        this.setState({ isLoggedIn: true });
      }
    }

    logoutHandler = e => {
      e.preventDefault();
      //   console.log("clicked");
      localStorage.removeItem("user");
      this.setState({ isLoggedIn: false });
    };

    render() {
      if (this.state.isLoggedIn) {
        return (
          <PostsPage posts={this.props.posts} logOut={this.logoutHandler} />
        );
      } else {
        return <LoginPage />;
      }
    }
  };

export default withAuthenticate;
