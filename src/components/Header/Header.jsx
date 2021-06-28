import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}><span>Social</span>Network</div>
            <div className={classes.loginBlock}>
                {props.isAuth
                    ? <div className={classes.userLogin}>
                        <div className={classes.login}>{props.login}</div>
                        <div className={classes.email}>{props.email}</div>
                    </div>
                    : <div className={classes.btnLogin}>
                        <NavLink to={'/login'}>LOG IN</NavLink>
                    </div>}
            </div>
        </header>
    )
};
export default Header;