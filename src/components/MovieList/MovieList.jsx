import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
import './MovieList.css'
import MovieItem from '../MovieItem/MovieItem';
import { Button } from '@material-ui/core';
function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);



    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <Button className="button" variant="contained" color="link" onClick={() => { history.push('/form') }}>Add a New Movie</Button>
            <h1>MovieList</h1>

            <section className="movies">
                {movies.map((movie, i) => {
                    return (
                        <MovieItem key={i} movie={movie} />
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;