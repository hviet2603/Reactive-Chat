import React from 'react';
import ContactBar from '../../containers/Contact-Bar/ContactBar';
import ChatWindow from '../../containers/Chat-Window/ChatWindow';

const MainApp = props => {

    const AppStyle = {
        height: '90vh'
    }

    return (
        <div style={AppStyle}>
            <ContactBar/>
            <ChatWindow/>
        </div>
    )
}

export default MainApp;