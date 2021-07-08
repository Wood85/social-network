import classes from "./Paginator.module.css";
import React from "react";
const Paginator = (totalUserCount, pageSize, currentPage, onPageChanged) => {
    const pageCount = Math.ceil(totalUserCount/pageSize)
    const pages = []
    for (let i=1; i<=pageCount; i++) {
        pages.push(i)
    }
    return(
            <div className={classes.pageCount}>
                {pages.map(p=> {
                    return <span className={currentPage === p && classes.selectedPage}
                                 onClick={(e) =>{onPageChanged(p)}}>{p}</span>
                })}
            </div>
    )
}

export  default Paginator