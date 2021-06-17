import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
    const dialogsElements = props.dialogsPage.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    const messagesElements = props.dialogsPage.messageData.map(message => <Message message={message.message}/>)
    const sendMessage = () => {
        props.dispatch(sendMessageActionCreator())
    }
    const onMessageChange = (e) => {
        const text = e.target.value
        props.dispatch(updateNewMessageTextActionCreator(text))
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messagesWrapper}>
                <div className={classes.messages}>
                    {messagesElements}
                </div>
                <div className={classes.addMessage}>
                    <textarea className={classes.entryField}
                              placeholder='Enter your message'
                              onChange={onMessageChange}
                              value={props.dialogsPage.newMessageText}/>
                </div>
                <div>
                    <button onClick={sendMessage} className={classes.btnAdd}>Send</button>
                </div>
            </div>
        </div>
    )
};
export default Dialogs;