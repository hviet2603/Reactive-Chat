import React from 'react';
import classes from './MessageBubble.module.css';

const MessageBubble = props => {

    let user = null;
    let classList = [classes.bubble];
    if (props.self) {
        classList.push(classes.selfBubble);       
    } else {
        classList.push(classes.otherBubble);
        user = <div className={classes.userName}>{props.userName}</div>;
    }     

    return (
        <div className={classList.join(' ')}>
            <div>{props.content}</div>
            {user}           
        </div>
    );
};

export default MessageBubble;