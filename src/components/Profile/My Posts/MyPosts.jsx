import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
    const postsElements = props.profilePage.posts.map(post=><Post message={post.message} likesCount={post.likesCount}/>)
    const newPostElement = React.createRef()
    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    const onPostChange = () => {
        const text = newPostElement.current.value
        props.dispatch(updateNewPostTextActionCreator(text))
    }
    return (
        <div>
            <h3>My post</h3>
            <div>
                <textarea className={classes.entryField} onChange={onPostChange} ref={newPostElement}
                          value={props.profilePage.newPostText}/>
            </div>
            <div>
                <button onClick={addPost} className={classes.btnAdd}>Add post</button>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>

    )
};
export default MyPosts;