import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* getUserProfile(action){
    let id = action.payload
    let profileObject = '';
    console.log('logging id before get', id);
    
    try {
        yield axios({
            method: 'GET',
            url: `/api/profile/${id}`
        })
            .then(response => {
                profileObject = response.data[0];
                console.log('testing profile object', profileObject);
                
            })
    } catch (error) {
        console.log(error);
    }
    yield put({ type: 'SET_USER_PROFILE', data: profileObject });

}

function* editUerInfo(action) {
    try {

        yield axios({
            method: 'PUT',
            url: 'api/profile/edit',
            data: action.payload
        })
            .then(response => {
                console.log('logging response.data from profile put', response.data);
            })
    } catch (error) {
        console.log(error);
    }
}



function* userProfileSaga() {
    yield takeEvery('GET_USER_PROFILE', getUserProfile);
    yield takeEvery('EDITED_USER_INFO', editUerInfo);
}

export default (userProfileSaga);