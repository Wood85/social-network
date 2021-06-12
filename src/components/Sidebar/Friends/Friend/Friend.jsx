import classes from './Friend.module.css'

const Friend = (props) => {
    return(
        <div className={classes.friend}>
            <div className={classes.image}><img className={classes.avatar} src={props.avatar} alt=""/></div>
            <div className={classes.name}>{props.name}</div>
        </div>
    )
}
export default Friend