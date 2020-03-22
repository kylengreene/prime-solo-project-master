import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import userReducer from '../reducers/userReducer';
import { connect } from 'react-redux';


function* alumniNewInfo(action) {
    yield console.log('logging from alumniNewInfo', action.payload);
    const objectToPost = action.payload
    console.log(objectToPost);
    yield put({ type: 'SET_NEW_ALUMNI_INFO', data: action.payload })
    try {
        yield axios({
            method: 'POST',
            url: `/api/alumniInfo/`,
            data: objectToPost
        })
    } catch (error) {
        console.log(error);
    }
}

function* alumniGetInfo(action) {
    let profileObject={};
    try {
        
        yield axios({
            method: 'GET',
            url: 'api/alumniInfo'
        })
            .then(response => {
                console.log('logging response.data from profile get', response.data);
                profileObject= response.data
                console.log('testing profile array', profileObject);
                
            })
    } catch (error) {
        console.log(error);
    }
    yield put({
        type: 'SET_ALUMNI_PROFILE',
        data: profileObject
    })
}


function* alumniRegistrationSaga() {
    yield takeEvery('NEW_ALUMNI_INFO', alumniNewInfo);
    yield takeEvery('GET_ALUMNI_PROFILE_INFO', alumniGetInfo)

}




export default (alumniRegistrationSaga);