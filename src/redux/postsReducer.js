import { CREATE_POST, FETCH_POSTS } from "./types";

const initialState = {
    posts: [{
            id: 1,
            title: "Title 1"
        },
        {
            id: 2,
            title: "Title 2"
        }
    ],
    fetchedPosts: []
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST:
            return {...state, posts: state.posts.concat([action.payload]) }
            // return {...state, posts: [...state.posts, action.payload] }
        case FETCH_POSTS:
            return {...state, fetchedPosts: action.payload }
        default:
            return state;
    }
}