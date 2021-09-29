import Post from "./Post";
import {connect} from 'react-redux';

const Posts = ({syncPosts}) => {
    if (!syncPosts.length) {
        return <p>There are no posts.</p>
    }
    return (
        <>
            <h2>Posts</h2>
            {syncPosts.map(post => <Post post={post} key={post.id} />)}
        </>
    );
}

const mapStateToProps = state => {
    return {
        syncPosts: state.posts.posts
    }
}

export default connect(mapStateToProps, null)(Posts);