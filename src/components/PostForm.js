import React, { useRef } from "react";
import { connect, useDispatch } from "react-redux";
import { createPost } from "../redux/actions"

const PostForm = () => {
    const input = useRef();
    const dispatch = useDispatch();

    const submitHandler = (event) => {
        event.preventDefault();
        const title = input.current.value;
        if (!title.trim()) return;
        const post = {
            id: Date.now().toString(),
            title
        }
        console.log(post);
        dispatch(createPost(post));
        input.current.value = "";
    }

    return (
        <div>  
            <h2>Post Form</h2>
            <form onSubmit={submitHandler}>
                <input type="text" ref={input} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = {
    createPost
} 

export default connect(null, mapDispatchToProps)(PostForm);