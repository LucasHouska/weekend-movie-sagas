import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_GENRES', fetchGenres)
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_DETAILS', fetchDetails)
    yield takeEvery('ADD_MOVIE', addMovie)
}

function* fetchGenres(action) {
    try {
        console.log('action.payload in fetchGenres is',action.payload)

        const genres = yield axios.get(`/api/genre/${action.payload}`);

        console.log('get genres', genres.data)

        yield put({ type: 'SET_GENRES', payload: genres.data })

    } catch (err) {

        console.log('ERROR in fetchGenres', err)

    }
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }

}

function* fetchDetails(action) {
    try {
        console.log('The payload for fetchDetails is:', action.payload)

        const details = yield axios.get(`/api/movie/details/${action.payload}`)

        console.log('Get details:', details.data)

        yield put({ type: 'SET_DETAILS', payload: details.data })
    } catch (err) {
        console.log('Sorry dude, error in fetchDetails', err);
    }
}

function* addMovie(action) {
    try{
        console.log('Payload in addMovie:', action.payload);

        const details = yield axios.post('/api/movie', action.payload);

        console.log('added movie:', details.data)


    } catch (err) {
        console.log('Error in addMovie', err)
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

const details = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        details
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);



ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
