import React from 'react';
import classes from './ContactBar.module.css';
import ConversationList from './ConversationList/ConversationList';

const ContactBar = props => {

    return (
        <div className={classes.ContactBar}>
            <ConversationList/>
        </div>
    )
}

export default ContactBar;