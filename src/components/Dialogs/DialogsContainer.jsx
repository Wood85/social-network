import React from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState()
    const sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator())
    }
    const updateNewMessageText = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }

    return (
        <Dialogs sendMessage={sendMessage} updateNewMessageText={updateNewMessageText} dialogsPage={state.dialogsPage}/>
    )
};
export default DialogsContainer;