import classes from "./Users.module.css";
import userPhoto from "../../assets/img/user.png";
import React from "react";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

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
                                        ? <button onClick={() => {
                                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                                withCredentials:true,
                                                headers: {
                                                    "API-KEY": "99b92852-12a3-4e30-8f17-f5dd26672b7a"
                                                }
                                            })
                                                .then(response => {
                                                    if(response.data.resultCode===0) {
                                                        props.unfollow(u.id)
                                                    }
                                                })
                                        }}>Unfollow</button>
                                        : <button onClick={() => {
                                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                                withCredentials:true,
                                                headers: {
                                                    "API-KEY": "99b92852-12a3-4e30-8f17-f5dd26672b7a"
                                                }
                                            })
                                                .then(response => {
                                                    if(response.data.resultCode===0) {
                                                        props.follow(u.id)
                                                    }
                                                })

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