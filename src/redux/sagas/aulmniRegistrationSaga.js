import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* alumniNewInfo(action) {
    try {
        
        yield put({ type: 'SET_NEW_ALUMNI_INFO', data: action.payload });
    } catch (error) {
        console.log('Error with alumni registration:', error);
        yield put({ type: 'REGISTRATION_FAILED' });
    }
}

function* aulmniRegistrationSaga() {
    yield takeLatest('NEW_ALUMNI_INFO', alumniNewInfo);
}

export default aulmniRegistrationSaga;
