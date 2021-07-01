import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My Posts/MyPostsContainer";
import React from "react";
const Profile = (props) => {
    return(
        <main className={classes.profile}>
            <ProfileInfo profile={props.profile}
                         status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer store={props.store}/>
        </main>
    )
};
export default Profile;