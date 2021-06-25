import React from "react";
import {sendMessage, updateNewMessageText} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage
    }
}

const DialogsContainer = connect(mapStateToProps,{
    updateNewMessageText, sendMessage})(Dialogs)
export default DialogsContainer;