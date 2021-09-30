import React from "react";
import FormSearch from "./components/FormSearch";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import FetchedPosts from "./components/FetchedPosts";

export default function App() {
  return (
    <div className="App">
      <h1>English Dictionary</h1>
      <FormSearch />
      {/* <hr />
      <Posts />
      <hr />
      <PostForm />
      <hr />
      <FetchedPosts /> */}
    </div>
  );
}
