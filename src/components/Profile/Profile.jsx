import classes from './Profile.module.css'
import MyPosts from "./My Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
    return(
        <main className={classes.profile}>
            <ProfileInfo/>
            <MyPosts state={props.state.posts}/>
        </main>
    )
};
export default Profile;