import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    const postsElements = props.state.map(post=><Post message={post.message} likesCount={post.likesCount}/>)
    return (
        <div>
            <h3>My post</h3>
            <div>
                <textarea/>
            </div>
            <div>
                <button className={classes.btnAdd}>Add post</button>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>

    )
};
export default MyPosts;