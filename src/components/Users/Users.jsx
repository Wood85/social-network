import classes from "./Users.module.css";
import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User/User";

const Users = ({totalUserCount, pageSize, currentPage, onPageChanged, users,  ...props}) => {
    return(
        <div>
            <Paginator totalItemsCount={totalUserCount}
                       pageSize={pageSize}
                       currentPage={currentPage}
                       onPageChanged={onPageChanged}/>
            <div className={classes.users}>
                {
                    users.map(u => <User user={u}
                                         key={u.id}
                                         followingInProgress={props.followingInProgress}
                                         unfollow={props.unfollow}
                                         follow={props.follow}/>)
                }
             </div>

        </div>
    )
}

export  default Users