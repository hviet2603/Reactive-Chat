import * as actionTypes from '../actions/actionTypes';

const initialState = {
    token: null,
    userId: null,
    userName: null,
    error: null,
    loading: false
}

const authStart = (state, action) => {
    return {
        ...state,
        error: null,
        loading: true
    };
}

const authSuccess = (state, action) => {
    return {
        ...state,
        token: action.idToken,
        userId: action.userId,
        userName: action.userName,
        error: null,
        loading: false
    };
};

const logout = (state, action) => {
    return initialState;
};

const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state,action);    
        case actionTypes.AUTH_SUCCESS: return authSuccess(state,action);
        case actionTypes.AUTH_LOGOUT: return logout(state,action);
        default: return state;
    }
}

export default authReducer;