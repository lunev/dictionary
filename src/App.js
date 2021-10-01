import React from "react";
import FormSearch from "./components/FormSearch";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import FetchedPosts from "./components/FetchedPosts";
import "./App.css";

export default function App() {
  return (
    <div className="container pt-5">
      <h1 className="text-center color-secondary mt-3 mb-4">
        English Dictionary
      </h1>
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
