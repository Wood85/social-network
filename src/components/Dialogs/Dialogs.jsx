import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../common/FormsControls/FormsControls";

const Dialogs = (props) => {
    const dialogsElements = props.dialogsPage.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>)
    const messagesElements = props.dialogsPage.messageData.map(message => <Message message={message.message} key={message.id}/>)
    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    if(!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messagesWrapper}>
                <div className={classes.messages}>
                    {messagesElements}
                </div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div className={classes.addMessage}>
                    <Field name='newMessageBody'
                           component={Textarea}
                           validate={[required, maxLength50]}
                           placeholder='Enter your message'
                           className={classes.entryField}/>
            </div>
            <div>
                <button className={classes.btnAdd}>Send</button>
            </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({form:'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;