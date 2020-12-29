import React, { useState } from 'react';
import classes from './InputField.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import database from '../../services/firebase/firebaseDB';

const InputField = props => {
    let [message, setMessage] = useState('');

    const inputChangedHandler = (event) => {
        setMessage(event.target.value);
    };

    const onSendMessage = event => {
        event.preventDefault();
        try {
            if (message !== '') 
            {
                let newMessage = {
                    content: message,
                    userId: props.userId,
                    userName: props.userName
                }
                let lastMessageInfo = {
                    content: message,
                    userName: props.userName
                }
                let updates = {};
                let newMessageKey = database.ref().child(`/messages/${props.currentChat}`).push().key;
                updates[`/messages/${props.currentChat}/${newMessageKey}`] = newMessage;
                updates[`/chats/${props.currentChat}/lastMessage`] = lastMessageInfo;
                database.ref().update(updates);
                setMessage('');
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <form
            className={classes.InputFieldBlock}
            onSubmit={event => onSendMessage(event)}
        >
            <input
                type="textarea"
                onChange={event => inputChangedHandler(event)}
                value={message}
            />
            <button className={classes.SendButton}><FontAwesomeIcon icon={faShare} /></button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        userName: state.auth.userName,
        userId: state.auth.userId,
        currentChat: state.main.mainChatId
    }
}

export default connect(mapStateToProps, null)(InputField);