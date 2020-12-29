import * as actionTypes from './actionTypes';

export const updateChatList = updatedList => {
    return {
        type: actionTypes.UPDATE_CHAT_LIST,
        chatList: [...updatedList]
    }
}

export const updateMainMessages = updatedList => {
    return {
        type: actionTypes.UPDATE_MAIN_MESSAGES,
        messages: [...updatedList]
    }
}

export const switchMainChat = chatId => {
    return {
        type: actionTypes.SWITCH_MAIN_CHAT,
        chatId: chatId
    }
}

