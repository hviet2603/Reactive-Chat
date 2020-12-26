import React from 'react';
import classes from './MessageBubble.module.css';

const MessageBubble = props => {

    let classList = [classes.bubble];
    if (props.self) {
        classList.push(classes.selfBubble);
    } else {
        classList.push(classes.otherBubble);
    }

    return (
        <div className={classList.join(' ')}>
            {props.content}
        </div>
    );
};

export default MessageBubble;