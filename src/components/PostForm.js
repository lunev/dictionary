import React, { useRef } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { createPost, showAlert } from "../redux/actions";
import { Alert } from "./Alert";

const PostForm = () => {
  const input = useRef();
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.app.alert);

  const submitHandler = (event) => {
    event.preventDefault();
    const title = input.current.value;

    if (!title.trim()) {
      return dispatch(showAlert("The title is empty"));
    }

    const post = {
      id: Date.now().toString(),
      title,
    };
    console.log(post);
    dispatch(createPost(post));
    input.current.value = "";
  };

  return (
    <div>
      <h2>Post Form</h2>

      {alert && <Alert text={alert} />}

      <form onSubmit={submitHandler}>
        <input type="text" ref={input} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

// const mapDispatchToProps = {
//   createPost,
//   showAlert,
// };

// const mapStateToProps = state => ({
//     alert: state.app.alert
// });

export default connect(null, null)(PostForm);
