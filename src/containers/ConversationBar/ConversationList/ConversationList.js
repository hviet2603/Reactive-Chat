import React from 'react';
import ConversationCard from '../../../components/ConversastionCard/ConversationCard';
import classes from './ConversationList.module.css';

const ConversationList = props => {
    return (
        <div className={classes.ConversationList}>
            {
                props.conversationList.map(
                    conversation => <ConversationCard
                        title={conversation.title !== null ? conversation.title : 'No Title'} 
                        chatId={conversation.chatId}
                        lastMessage={conversation.lastMessage} 
                    />
                )
            }

        </div>
    )
};

export default ConversationList;