import classes from "../Users.module.css";
import userPhoto from "../../../assets/img/user.png";
import React from "react";
import {NavLink} from "react-router-dom";

const User = ({user,followingInProgress,unfollow,follow}) => {
    return(
        <div className={classes.user}>
            <div className={classes.userLeftBlock}>
                <div className={classes.userPhoto}>
                    <NavLink to={'/profile/'+user.id}>
                        <img src={user.photos.small!=null
                            ?user.photos.small
                            :userPhoto}/>
                    </NavLink>
                </div>
                <div className={classes.userFollow}>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id=>id===user.id)}
                                  onClick={() => {unfollow(user.id)}
                                  }>Unfollow</button>
                        : <button disabled={followingInProgress.some(id=>id===user.id)}
                                  onClick={() => {follow(user.id)}
                                  }>Follow</button>}
                </div>
            </div>
            <div className={classes.userContent}>
                <div className={classes.userInfo}>
                    <div className={classes.userName}>{user.name}</div>
                    <div className={classes.userStatus}>{user.status}</div>
                </div>
                <div className={classes.userLocation}>
                    <div className={classes.userCountry}>{'user.location.country'},</div>
                    <div className={classes.userCity}>{'user.location.city'}</div>
                </div>
            </div>
        </div>
    )
}

export  default User