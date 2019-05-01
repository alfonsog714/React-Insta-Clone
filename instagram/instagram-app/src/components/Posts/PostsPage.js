import React from "react";
import PostContainer from "./PostContainer";

const PostsPage = props => (
  <PostContainer posts={props.posts} logOut={props.logOut} />
);

export default PostsPage;
