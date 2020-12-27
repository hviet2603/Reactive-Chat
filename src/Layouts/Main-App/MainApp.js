import React from 'react';
import ConversationBar from '../../containers/ConversationBar/ConversationBar';
import ChatWindow from '../../containers/ChatWindow/ChatWindow';

const MainApp = props => {

    const AppStyle = {
        height: '90vh'
    }

    return (
        <div style={AppStyle}>
            <ConversationBar/>
            <ChatWindow/>
        </div>
    )
}

export default MainApp;