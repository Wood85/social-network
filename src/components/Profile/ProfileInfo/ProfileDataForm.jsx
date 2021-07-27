import classes from "./ProfileInfo.module.css";
import {reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";


const maxLength20 = maxLengthCreator(20)

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return(
        <form className={classes.ProfileDataForm} onSubmit={handleSubmit}>
            <div className={classes.info}>
                <div className={classes.fullNameEditMode}>
                    <div className={classes.fullNameTitle}>
                        full name:
                    </div>
                {createField ('Full name', 'fullName', [required, maxLength20], Input)}
                </div>
                <div className={classes.aboutMe}>
                    <div className={classes.aboutMeTitle}>
                        about me:
                    </div>
                    {createField ('About me', 'aboutMe', [required], Textarea)}
                </div>
                <div className={classes.job}>
                    Looking for a job :
                    {createField ('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
                    {/*{profile.lookingForAJob ? "Ищу " : "Не ищу "} работу*/}
                </div>
                <div className={classes.jobDescriptions}>
                    <div className={classes.jobDescriptionsTitle}>
                        my professional skills:
                    </div>
                    {createField ('My professional skills', 'lookingForAJobDescription', [], Textarea)}
                </div>
            </div>
            <div className={classes.contacts}>
                Contacts:
                {Object.keys(profile.contacts).map(key => {
                    return <div key={key}>
                        {key}: {createField (key, 'contacts.'+key, [], Input)}
                    </div>
                })}
            </div>
            <div className={classes.editMode}>
                <div><button className={classes.btnEditModeSave}>save</button></div>
                {error && <div className={classes.formSummaryError}>
                    {error}
                </div>
                }
            </div>
        </form>
    )
}

const ProfileDataReduxForm = reduxForm({form: 'editProfile'})(ProfileDataForm)

export default ProfileDataReduxForm