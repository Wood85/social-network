import classes from "./Paginator.module.css";
import React, {useState} from "react";
const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    const pagesCount = Math.ceil(totalItemsCount/pageSize)
    const pages = []
    for (let i=1; i<=pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber,setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize

    return(
            <div className={classes.paginator}>
                {portionNumber > 1
                ? <button className={classes.button} onClick={() => {setPortionNumber(portionNumber-1) }}>Prev</button>
                : <div className={classes.void}></div>}
                {pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber )
                    .map((p)=> {
                    return <span className={currentPage === p ? classes.selectedPage +' '+ classes.page
                        : classes.notSelectedPage +' '+ classes.page} key={p}
                                 onClick={(e) =>{onPageChanged(p)}}>{p}</span>
                })}
                {portionCount > portionNumber
                ? <button className={classes.button} onClick={() => {setPortionNumber(portionNumber+1)}}>Next</button>
                : <div className={classes.void}></div>}
            </div>
    )
}

export  default Paginator