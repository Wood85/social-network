import classes from './Post.module.css'

const Post = (props) => {
    return (
                <div className={classes.item}>
                    <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" />
                    {props.message}
                    <div>
                        like
                        <span>{props.likesCount}</span>
                    </div>
                </div>

    )
};
export default Post;