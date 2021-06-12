import classes from './DialogItem.module.css';
import {NavLink} from "react-router-dom";
const DialogItem = (props) => {
    return(
        <div className={classes.dialog}>
            <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.jpg"/>
            <NavLink to={"/dialogs/"+props.id}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem;