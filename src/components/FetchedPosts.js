import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";
import { fetchPosts } from "../redux/actions";
import { Loader } from "./Loader";

export default () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.fetchedPosts);
  const loading = useSelector((state) => state.app.loading);

  const fetch = () => {
    dispatch(fetchPosts());
  };

  if (loading) {
    return <Loader />;
  }

  if (!posts.length) {
    return <button onClick={fetch}>Load posts</button>;
  }
  return posts.map((post) => <Post post={post} key={post.id} />);
};
