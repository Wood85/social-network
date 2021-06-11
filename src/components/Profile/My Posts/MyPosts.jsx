import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
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
                <Post message='Hi'/>
                <Post message='Hello'/>
                <Post message='Aloha'/>
            </div>
        </div>

    )
};
export default MyPosts;