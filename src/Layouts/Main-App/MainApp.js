import React, { useEffect } from 'react';
import ConversationBar from '../../containers/ConversationBar/ConversationBar';
import ChatWindow from '../../containers/ChatWindow/ChatWindow';
import { connect } from 'react-redux';
import database from '../../services/firebase/firebaseDB';
import * as mainActions from '../../store/actions/mainActions';

const MainApp = props => {

    let {isAuthenticated, updateConversationList, mainChatId, switchMainChat, updateMainMessages} = props;

    useEffect(() => {
        if (isAuthenticated) {
            database.ref("chats").on("value", snapshot => {
                let updatedList = [];
                let chatsRef = snapshot.val();
                for (let key in chatsRef) 
                {
                    let chat = {
                        chatId: key,
                        ...chatsRef[key] 
                    }
                    updatedList.push(chat);
                }
                updateConversationList(updatedList);
            })
        }
    }, [isAuthenticated, updateConversationList]);

    useEffect(() => {
        if (isAuthenticated) {
            if(mainChatId === null) switchMainChat('-MPeYtKS2JH2RitvEN85');
            database.ref("messages/" + mainChatId).on("value", snapshot => {
                let newMainMessages = [];
                let messagesRef = snapshot.val();
                for (let key in messagesRef)
                {
                    let message = {
                        messageId: key,
                        ...messagesRef[key]
                    }
                    newMainMessages.push(message);
                }
                updateMainMessages(newMainMessages);                
            });
        }       
    }, [isAuthenticated, mainChatId, switchMainChat, updateMainMessages])

    const AppStyle = {
        height: '90vh'
    }

    return (
        <div style={AppStyle}>
            <ConversationBar conversationList={props.conversationList}/>
            <ChatWindow />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
        conversationList: state.main.conversationList,
        mainChatId: state.main.mainChatId,
        mainMessages: state.main.mainMessages  
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateConversationList: updatedList => dispatch(mainActions.updateChatList(updatedList)),
        updateMainMessages: messages => dispatch(mainActions.updateMainMessages(messages)),
        switchMainChat: id => dispatch(mainActions.switchMainChat(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);