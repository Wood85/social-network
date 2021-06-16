import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/store";

const Dialogs = (props) => {
    const dialogsElements = props.dialogsPage.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    const messagesElements = props.dialogsPage.messageData.map(message => <Message message={message.message}/>)
    const newMessageElement = React.createRef()
    const addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }
    const onMessageChange = () => {
        const text = newMessageElement.current.value
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
                              ref={newMessageElement}
                              onChange={onMessageChange}
                              value={props.dialogsPage.newMessageText}/>
                </div>
                <div>
                    <button onClick={addMessage} className={classes.btnAdd}>Add message</button>
                </div>
            </div>
        </div>
    )
};
export default Dialogs;