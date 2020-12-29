import React from 'react';
import classes from './NewChatModal.module.css';
import database from '../../services/firebase/firebaseDB';

const Modal = props => {

    let newTitle = '';

    let inputChangeHandler = (event) => {
        newTitle = event.target.value;
    }
    let onCreate = (event) => {
        event.preventDefault();
        try {
            if (newTitle !== '') {
                let newChatInfo = {
                    title: newTitle
                }
                let newPostKey = database.ref().child('chats').push().key;
                let updates = {};
                updates['/chats/' + newPostKey] = newChatInfo;
                database.ref().update(updates);
                props.onCancel();
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    let modal = (
        <div className={classes.Modal}>
            <div className={classes.modalTitle}>Create new Chat</div>
            <form onSubmit={(event) => onCreate(event)}>
                <div className={classes.inputBlock}>
                    <label for="title">Titel: </label>
                    <input type="text" onChange={(event) => inputChangeHandler(event)}></input>
                </div>
                <div className={classes.buttonBlock}>
                    <button>Create</button>
                    <button onClick={props.onCancel} type="button">Cancel</button>
                </div>
            </form>
        </div>
    )

    if (!props.show) {
        modal = null;
    }

    return modal;
}

export default Modal;