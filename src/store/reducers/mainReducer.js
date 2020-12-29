import * as actionTypes from '../actions/actionTypes';

const initialState = {
    conversationList: [],
    mainChatId: null,
    mainMessages: []
}

const updateChatList = (state, action) => {
    return {
        ...state,
        conversationList: action.chatList
    }
}

const updateMainMessages = (state, action) => {
    return {
        ...state,
        mainMessages: action.messages
    }
}

const switchMainChat = (state, action) => {
    return {
        ...state,
        mainChatId: action.chatId
    }
}

const mainReducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_CHAT_LIST: return updateChatList(state, action);
        case actionTypes.UPDATE_MAIN_MESSAGES: return updateMainMessages(state, action);
        case actionTypes.SWITCH_MAIN_CHAT: return switchMainChat(state, action);       
        default: return state;
    }
}

export default mainReducer;