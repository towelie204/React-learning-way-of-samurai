import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map( dialog => {
        return <DialogItem name={dialog.name} id={dialog.id} imageUrl={dialog.imageUrl} />
    })

    let messagesElements = props.dialogsPage.messages.map( msg => {
        return <Message message={ msg.message } />
    })


    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onMessageBodyChange = (e) => {
        let text = e.target.value;
        props.updateMessageBody(text);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs__items}>
                { dialogsElements }
            </div>
            <div className={classes.messages}>
                <div>
                    { messagesElements }
                </div>
                <div className={ classes.sendMsg__wrapper }>
                    <textarea value={ props.newMessageBody }
                        onChange={ onMessageBodyChange } 
                        className={ classes.sendMsg__input }></textarea>
                    <button onClick={ onSendMessageClick } className={ classes.sendMsg__btn }>
                        Send
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;