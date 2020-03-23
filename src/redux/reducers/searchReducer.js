import { combineReducers } from 'redux';

const searchParameters = (state = {}, action) => {
    switch (action.type) {
        case 'SET_NEW_ALUMNI_SEARCH':
            return action.data;
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.user

export default combineReducers({
    searchParameters
});