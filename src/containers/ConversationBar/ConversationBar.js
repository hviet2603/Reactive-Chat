import React from 'react';
import classes from './ConversationBar.module.css';
import ConversationList from './ConversationList/ConversationList';

const ConversationBar = props => {

    return (
        <div
            className={classes.ConversationBar}
        >
            <ConversationList
                conversationList={props.conversationList}
                switchModeMobile={props.switchModeMobile}
            />
        </div>
    )
}

export default ConversationBar;