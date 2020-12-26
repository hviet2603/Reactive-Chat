import React from 'react';
import InputField from '../../components/InputField/InputField';
import MessageBubble from '../../components/MessageBubble/MessageBubble'
import classes from './ChatWindow.module.css';

const ChatWindow = props => {
    return (
        <div className={classes.ChatWindow}>
            <div className={classes.MessageWindow}>
                <MessageBubble self={true} content={"Hello"}/>
                <MessageBubble content={"Hello"}/>
                <MessageBubble self={true} content={"How are you?"}/>
                <MessageBubble content={"I'm fine, thank you, and you?"}/>
                <MessageBubble self={true} content={"I'm doing well too, thanks"}/>
                <MessageBubble self={true} content={"Many thanks for your concern. Would you like to go out for some tea? I'll tell you all about it when I see you again."}/>
                <MessageBubble self={true} content={"Hello again"}/>
            </div>
            <InputField/>
        </div>
    )
}

export default ChatWindow;