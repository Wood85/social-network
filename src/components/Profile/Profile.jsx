import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My Posts/MyPostsContainer";
const Profile = (props) => {
    return(
        <main className={classes.profile}>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </main>
    )
};
export default Profile;