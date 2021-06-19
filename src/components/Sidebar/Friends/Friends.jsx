import classes from './Friends.module.css';
import Friend from "./Friend/Friend";
const Friends =(props) =>{
    let friendElement = props.sidebar.friends.map(f => <Friend avatar = {f.ava} name = {f.name}/>);
    return(
        <section className={classes.friends}>
            <div className={classes.title}>Friends</div>
            <div className={classes.friendList}>
                {friendElement}
            </div>
        </section>
    )
}
export default Friends