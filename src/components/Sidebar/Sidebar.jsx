import classes from './Sidebar.module.css';
const Sidebar = () => {
    return(
        <aside className={classes.sidebar}>
            <div>Profile</div>
            <div>Messages</div>
            <div>News</div>
            <div>Music</div>
            <div>Settings</div>
        </aside>
    )
};
export default Sidebar;