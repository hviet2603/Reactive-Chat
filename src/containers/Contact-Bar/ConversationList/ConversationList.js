import React from 'react';
import ConversationCard from '../../../components/ConversastionCard/ConversationCard';
import classes from './ConversationList.module.css';

const ConversationList = props => {
    return (
        <div className={classes.ConversationList}>
            <ConversationCard title={"Title1"} active={true}/>
            <ConversationCard title={"Title2"}/>
            <ConversationCard title={"Title3"}/>
            <ConversationCard title={"Title4"}/>
            <ConversationCard title={"Title5"}/>
            <ConversationCard title={"Title6"}/>
            <ConversationCard title={"Title7"}/>
        </div>
    )
};

export default ConversationList;