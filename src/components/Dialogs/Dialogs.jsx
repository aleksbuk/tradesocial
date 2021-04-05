import React from "react";
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import MessageAva from './Message/MessageAva/MessageAva'
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogs-reduser'

const Dialogs = (props) => {

    let MessageAvatar = props.dialogsData.map(mess => < MessageAva name={mess.name} id={mess.id} />)

    let newMessagetElement = React.createRef();

    let messageElement = props.messages.map(m => < Message message={m.message} />)


    let addMessage = () => {

        props.dispatch(addMessageActionCreator());

    }


    let onMessageClick = () => {

        let mess = newMessagetElement.current.value;
        let body = (updateNewMessageActionCreator(mess));
        props.store.dispatch(body);

    }

    return (
        <div className={classes.dialogs}>

            <div className={classes.messages}>
                {MessageAvatar}
            </div>
            <div className={classes.messages}>
                {messageElement}
                <div>
                    <textarea onChange={onMessageClick} ref={newMessagetElement}
                        className={classes.dialogs} value={props.newMessageText} />
                </div>
                <div>
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>

        </div>


    )
}
export default Dialogs