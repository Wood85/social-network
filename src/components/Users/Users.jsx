import classes from './Users.module.css'

const Users = (props) => {
    if(props.users.length===0) {
        props.setUsers([
            {id:1, photoUrl:'https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg',
                followed:true, fullName:'Alexandr', status:'I am a boss', location:{city:'Novgorod', country:'Russia'}},
            {id:2, photoUrl:'https://pbs.twimg.com/profile_images/1346200826998644736/GXKFXDl7_400x400.jpg',
                followed:false, fullName:'Dmitry', status:'I am a boss too', location:{city:'Minsk', country:'Belarus'}},
            {id:3, photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWSwL6QEGjHRyGx0Dv4tpZjxelnG2MWh1A-9MFs2rw9MZDG-gWgWj86z5e0prysSigS6I&usqp=CAU',
                followed:true, fullName:'Andrew', status:'I am a boss too', location:{city:'Moscow', country:'Russia'}}
        ])
    }
    return (
        <div className={classes.users}>
            {
                props.users.map(u =>
                    <div key={u.id} className={classes.user}>
                        <div className={classes.userLeftBlock}>
                            <div className={classes.userPhoto}><img src={u.photoUrl}/></div>
                            <div className={classes.userFollow}>
                                {u.followed
                                    ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                                    : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                            </div>
                        </div>
                        <div className={classes.userContent}>
                            <div className={classes.userInfo}>
                                <div className={classes.userName}>{u.fullName}</div>
                                <div className={classes.userStatus}>{u.status}</div>
                            </div>
                            <div className={classes.userLocation}>
                                <div className={classes.userCountry}>{u.location.country},</div>
                                <div className={classes.userCity}>{u.location.city}</div>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    )
}
export default Users