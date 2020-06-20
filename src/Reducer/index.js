import { combineReducers } from 'redux';

import alertState from './alertReducer';
import loginLogoutState from './loginReducer';

export default combineReducers({
    alertState,
    loginLogoutState
});