import React from 'react';
import { sendMessageCreator, updateMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
    let state = props.store.getState();

    let sendMessage = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let updateMessageBody = (text) => {
        let action = updateMessageBodyCreator(text);
        props.store.dispatch(action);
    }

    return (
        <Dialogs sendMessage={ sendMessage } 
            updateMessageBody={ updateMessageBody } 
            newMessageBody={ state.dialogsPage.newMessageBody }
            dialogsPage={ state.dialogsPage } />
    )
}

export default DialogsContainer;