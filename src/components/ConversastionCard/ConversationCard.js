import React from 'react';
import classes from './ConversationCard.module.css';

const ConversationCard = props => {

    let classList = [classes.ConversationCard];
    if (props.active) classList.push(classes.activeCard);
    
    return (
        <div className={classList.join(' ')}>
            <div className={classes.ConversationTitle}>{props.title}</div>
            <p className={classes.lastMessage}>{props.lMessage}</p>
        </div>
    )
}

export default ConversationCard;