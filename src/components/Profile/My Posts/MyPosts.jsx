import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import React from 'react'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)

const MyPostsForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newPostText'
                       component={Textarea}
                       validate={[required,maxLength10]}
                       className={classes.entryField}/>
            </div>
            <div>
                <button className={classes.btnAdd}>Add post</button>
            </div>
        </form>
    )
}

const MyPostsReduxForm = reduxForm({form: 'myPostsForm'})(MyPostsForm)

const MyPosts = React.memo(props => {
    const postsElements = props.profilePage.posts.map(post => <Post key={post.id} message={post.message}
                                                                    likesCount={post.likesCount}/>)
    const addNewPost = (values) => {
        props.addPost(values.newPostText)
    }
    return (
        <div>
            <h3>My post</h3>
            <MyPostsReduxForm onSubmit={addNewPost}/>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>

    )
})

export default MyPosts;