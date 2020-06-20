import {  
    USER_LOADED, 
    AUTH_ERROR, 
    LOGIN_SUCCCESS, 
    LOGIN_FALI, 
    LOGOUT } from '../Action/type';

const initialState = {
    token: localStorage.getItem('jwt_token'),
    isAuthenticated: null,
    loading: true,
    user: null
}

const Reducer = (state = initialState, actions) => {

    const { type, payload } = actions;

    switch (type) {
    
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            }
        case LOGIN_SUCCCESS:
            localStorage.setItem('jwt_token', payload.jwt_token);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }
        case LOGIN_FALI:
        case AUTH_ERROR:
        case LOGOUT:
            localStorage.removeItem('jwt_token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            }

        default:
            return state;
    }
}

export default Reducer;