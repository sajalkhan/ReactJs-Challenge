import { setAlert } from './alertAction';
import axios from 'axios';

import {
    USER_LOADED,
    LOGIN_SUCCCESS,
    LOGIN_FALI,
    LOGOUT } from './type';


// Load User
export const loadUser = () => async (dispatch) => {
    if (localStorage.jwt_token) {
        dispatch({
            type: USER_LOADED,
            payload: {
                'username': 'dingiuser',
                'password': '12345678'
            }
        });
    }
}

// Login user
export const loginAction = (username, password) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ username, password });

    try {
        const res = await axios.post('http://frontend.interview.dingi.work/user/login/', body, config);
        dispatch({
            type: LOGIN_SUCCCESS,
            payload: res.data
        });

        dispatch(loadUser());

    } catch (err) {
        const errors = err;
        if (errors) {
            dispatch(setAlert('Invalid Credential!', 'danger'));
        }
        dispatch({
            type: LOGIN_FALI
        })
    }
}

// Logout User
export const logOut = () => dispatch => {
    dispatch({ type: LOGOUT });
}