import classes from './Profile.module.css'
import MyPosts from "./My Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = () => {
    return(
        <main className={classes.profile}>
            <ProfileInfo/>
            <MyPosts/>
        </main>
    )
};
export default Profile;