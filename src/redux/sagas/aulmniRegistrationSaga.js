import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import alumniRegistrationReducer from '../reducers/alumniReducer'


function* alumniNewInfo(action) {

    yield console.log('logging from alumniNewInfo', action.payload);
    const objectToPost = action.payload
    console.log( objectToPost);
    
        yield put({ type: 'SET_NEW_ALUMNI_INFO', data: action.payload })
    // try {
        
    //     yield axios({
    //         method: 'POST',
    //         url: '/api/alumniInfo',
    //         data: objectToPost 
    //     })
    //     // yield put({
    //     //     type: 'GET_FRUIT'
    //     // })
    // } catch (error) {
    //     console.log(error);
    // }

}


function* alumniRegistrationSaga() {
    yield takeEvery('NEW_ALUMNI_INFO', alumniNewInfo);
}

export default alumniRegistrationSaga;
