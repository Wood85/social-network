import classes from "./Users.module.css";
import userPhoto from "../../assets/img/user.png";
import React from "react";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";
import {toggleFollowingProgress} from "../../redux/users-reducer";

const Users = (props) => {
    const pageCount = Math.ceil(props.totalUserCount/props.pageSize)
    const pages = []
    for (let i=1; i<=pageCount; i++) {
        pages.push(i)
    }
    return(
        <div>
            <div className={classes.pageCount}>
                {pages.map(p=> {
                    return <span className={props.currentPage === p && classes.selectedPage}
                                 onClick={(e) =>{props.onPageChanged(p)}}>{p}</span>
                })}
            </div>
            <div className={classes.users}>
                {
                    props.users.map(u =>
                        <div key={u.id} className={classes.user}>
                            <div className={classes.userLeftBlock}>
                                <div className={classes.userPhoto}>
                                    <NavLink to={'/profile/'+u.id}>
                                        <img src={u.photos.small!=null
                                            ?u.photos.small
                                            :userPhoto}/>
                                    </NavLink>
                                </div>
                                <div className={classes.userFollow}>
                                    {u.followed
                                        ? <button disabled={props.followingInProgress.some(id=>id===u.id)} onClick={() => {
                                            props.toggleFollowingProgress(true, u.id)
                                            usersAPI.unfollowUser(u.id)
                                                .then(data => {
                                                    if(data.resultCode==0) {
                                                        props.unfollow(u.id)
                                                    }
                                                    props.toggleFollowingProgress(false, u.id)
                                                })
                                        }}>Unfollow</button>
                                        : <button disabled={props.followingInProgress.some(id=>id===u.id)} onClick={() => {
                                            props.toggleFollowingProgress(true, u.id)
                                            usersAPI.followUser(u.id)
                                                .then(data => {
                                                    if(data.resultCode==0) {
                                                        props.follow(u.id)
                                                    }
                                                })
                                            props.toggleFollowingProgress(false, u.id)
                                        }}>Follow</button>}
                                </div>
                            </div>
                            <div className={classes.userContent}>
                                <div className={classes.userInfo}>
                                    <div className={classes.userName}>{u.name}</div>
                                    <div className={classes.userStatus}>{u.status}</div>
                                </div>
                                <div className={classes.userLocation}>
                                    <div className={classes.userCountry}>{'u.location.country'},</div>
                                    <div className={classes.userCity}>{'u.location.city'}</div>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    )
}

export  default Users