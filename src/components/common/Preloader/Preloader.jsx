import classes from "./Preloader.module.css";
import preloader from "../../../assets/img/preloader.svg";
import React from "react";

const Preloader = (props) => {
    return(
        <div className={classes.preloader}>
            <img  src={preloader} alt=""/>
        </div>
    )
}
export default Preloader