import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


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
    let profileArray = {};
    try {

        yield axios({
            method: 'GET',
            url: 'api/alumniInfo'
        })
            .then(response => {
                console.log('logging response.data from profile get', response.data);
                profileArray = response.data
                console.log('testing profile array', profileArray);

            })
    } catch (error) {
        console.log(error);
    }
    yield put({
        type: 'SET_ALUMNI_PROFILES',
        data: profileArray
    })
    yield put({
        type: 'SET_USER_PROFILE',
        data: profileArray[action.payload - 1]
    })

}



function* alumniRegistrationSaga() {
    yield takeEvery('NEW_ALUMNI_INFO', alumniNewInfo);
    yield takeEvery('GET_ALUMNI_PROFILE_INFO', alumniGetInfo);
}




export default (alumniRegistrationSaga);