import uuid from 'react-uuid'
import { SET_ALERT, REMOVE_ALERT } from './type';

export const setAlert = (msg, alertType) => dispatch => {
    const id = uuid(); // generate unique id
    dispatch({
        type: SET_ALERT,
        payload: { msg, alertType, id }
    });

    setTimeout(() => {
        dispatch({
            type: REMOVE_ALERT,
            payload: id
        })
    }, 3000)
} 