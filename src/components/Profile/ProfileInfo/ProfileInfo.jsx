import classes from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/img/user.png";
import {useState} from "react";
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = ({profile,status,updateStatus,isOwner,savePhoto, saveProfile}) => {

    const [editMode, setEditMode] = useState(false)

    if(!profile){
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false)
            }
        )
    }

    return(
        <div className={classes.body}>
            <div className={classes.image}>
                <div className={classes.imageUser}>
                    <img src={profile.photos.large || userPhoto}/>
                    {isOwner && <div className={classes.inputWrapper}>
                        <input className={classes.inputFile} type={'file'} name={'file'} id={'inputFile'} onChange={onMainPhotoSelected}/>
                        <label for={'inputFile'} className={classes.inputFileButton}>
                            <span className={classes.inputFileButtonText}>Выберите файл</span>
                        </label>
                    </div>}
                </div>
                <div className={classes.status}>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                </div>
            </div>
            { editMode
                ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={()=>{setEditMode(true)}}/>}
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return(
        <div className={classes.profileData}>
            <div className={classes.info}>
                <div className={classes.fullName}>
                    {profile.fullName}
                </div>
                <div className={classes.aboutMe}>
                    <div className={classes.aboutMeTitle}>
                        about me:
                    </div>
                    {profile.aboutMe}
                </div>
                <div className={classes.job}>
                    {profile.lookingForAJob ? " " : "not "} looking for a job
                </div>
                <div className={classes.jobDescriptions}>
                    {profile.lookingForAJobDescription}
                </div>
            </div>
            <div className={classes.contacts}>
                {Object.keys(profile.contacts).map(key => {
                    return <Contact  key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                })}
            </div>
            {isOwner && <div className={classes.editMode}>
                <button className={classes.btnEditMode} onClick={goToEditMode}>edit</button>
            </div>}
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {

    if(!contactValue) {
        return <div className={classes.void}></div>
    }else {
        return (
            <div className={classes.contact}>
                <div className={classes.contactTitle}>
                    {contactTitle}
                </div>
                <div className={classes.contactValue}>
                    {contactValue}
                </div>
            </div>
        )
    }
}


export default ProfileInfo;