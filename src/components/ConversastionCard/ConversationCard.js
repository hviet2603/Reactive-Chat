import React from 'react';
import classes from './ConversationCard.module.css';
import { connect } from 'react-redux';
import * as mainActions from '../../store/actions/mainActions';

const ConversationCard = props => {

    const onClickHandler = () => {
        props.onSwitchChat(props.chatId);
        props.switchModeMobile();
    }       

    let classList = [classes.ConversationCard];
    if (props.mainChatId === props.chatId) classList.push(classes.activeCard);
    let lMessage = props.lastMessage !== undefined ? <p><b>{props.lastMessage.userName}:</b> <i>{props.lastMessage.content.length > 60 ? props.lastMessage.content.substring(0,79) + ' ...' : props.lastMessage.content}</i></p>: null;

    return (
        <div 
            className={classList.join(' ')}
            onClick={onClickHandler}
        >
            <div className={classes.ConversationTitle}>{props.title}</div>
            {lMessage}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        mainChatId: state.main.mainChatId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSwitchChat: id => dispatch(mainActions.switchMainChat(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConversationCard);