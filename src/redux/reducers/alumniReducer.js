import { combineReducers } from 'redux';

const alumniRegistrationReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_NEW_ALUMNI_INFO':
            return action.data;
        default:
            return state;
    }
};

const alumniInfoForProfile = (state={},action) =>{
    switch (action.type) {
        case 'SET_ALUMNI_PROFILE':
            return action.data;
        default:
            return state;
    }
}

// user will be on the redux state at:
// state.user

export default combineReducers({
    alumniRegistrationReducer,
    alumniInfoForProfile
});

