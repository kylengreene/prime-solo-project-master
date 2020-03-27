import { combineReducers } from 'redux';


const userProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_USER_PROFILE':
            return action.data;
        default:
            return state;
    }
}


export default combineReducers({
   userProfileReducer,
});