import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';



function* alumniSearch(action) {
   console.log('logging search inputs from saga', action.payload);
    yield put({ type: 'SET_NEW_ALUMNI_SEARCH', data: action.payload});
    let searchResponseObject = {};
    try {
        // ${ action.payload.category } /${action.payload.search}
        yield axios.get(`/api/search/${action.payload.category}&${action.payload.search}`
          
        )
            .then(response => {
                console.log('logging response.data from search get', response.data);
                searchResponseObject = response.data
                console.log('testing profile array', searchResponseObject);

            })
    } catch (error) {
        console.log(error);
    }
    yield put({
        type: 'SET_SEARCH_RESULTS',
        data: searchResponseObject
    })
}


function* alumniRegistrationSaga() {
    yield takeEvery('ALUMNI_SEARCH_QUERY', alumniSearch)

}




export default (alumniRegistrationSaga);