import React, { useEffect } from 'react';
import InputField from '../../components/InputField/InputField';
import MessageBubble from '../../components/MessageBubble/MessageBubble'
import classes from './ChatWindow.module.css';
import { connect } from 'react-redux';

const ChatWindow = props => {

    let messagesEndRef = React.createRef();
    
    useEffect(() => {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth'});
    }, [props.mainMessages, messagesEndRef]); 

    let chatWindowStyle = [classes.ChatWindow];
    if (!props.showOnMobile) chatWindowStyle.push(classes.HiddenOnMobile); 

    return (
        <div className={chatWindowStyle.join(" ")}>
            <div className={classes.MessageWindow}>
                {
                    props.mainMessages.map((message) =>
                        <MessageBubble 
                            content={message.content} 
                            self={message.userId === props.userId} 
                            userName={message.userName}
                        />
                    )                   
                }
                <p ref={messagesEndRef} className={classes.messagesEnd}></p>                              
            </div>                       
            <InputField/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        mainMessages: state.main.mainMessages,
        userId: state.auth.userId
    }
}

export default connect(mapStateToProps,null)(ChatWindow);