import { useDispatch, useSelector } from 'react-redux';
import Post from "./Post";
import { fetchPosts } from "../redux/actions";

export default () => {

    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.fetchedPosts)

    if (!posts.length) {
        return <button onClick={() => dispatch(fetchPosts())}>Load posts</button>;
    }
    return (
        <>
            {posts.map(post => <Post post={post} key={post.id} />)};
        </>
    )
}