import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import userReducer from '../reducers/userReducer';
import { connect } from 'react-redux';



function* alumniSearch(action) {
   console.log('logging search inputs from saga', action.payload);
    yield put({ type: 'SET_NEW_ALUMNI_SEARCH', data: action.payload})
   
    try {

        yield axios.get(`/api/search/${action.payload.category}/${action.payload.search}`, {
            // params: {
            //     category: `${action.payload.category}`,
            //     search: `${action.payload.search}`
            // }
        })
            .then(response => {
                // console.log('logging response.data from search get', response.data);
                // profileObject = response.data
                // console.log('testing profile array', profileObject);

            })
    } catch (error) {
        console.log(error);
    }
//     yield put({
//         type: 'SET_ALUMNI_SEARCH_RESULTS',
//         data: profileObject
//     })
}


function* alumniRegistrationSaga() {
    yield takeEvery('ALUMNI_SEARCH_QUERY', alumniSearch)

}




export default (alumniRegistrationSaga);