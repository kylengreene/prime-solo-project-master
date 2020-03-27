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
        case 'SET_ALUMNI_PROFILES':
            return action.data;
        default:
            return state;
    }
}

const viewSpecificProfile = (state = {}, action) => {
    switch (action.type) {
        case 'SET_VIEW_USER':
            return action.data;
        default:
            return state;
    }
}

// user will be on the redux state at:
// state.user

export default combineReducers({
    alumniRegistrationReducer,
    alumniInfoForProfile,
    viewSpecificProfile
});

