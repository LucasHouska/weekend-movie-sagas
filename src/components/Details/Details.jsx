import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {Button} from '@material-ui/core';

function Details() {

    const history = useHistory();
    const { id } = useParams();

    const details = useSelector(state => state.details)

    // dispatch({ type: 'FETCH_GENRES', payload: id });

    const genres = useSelector(state => state.genres)

    console.log('details in Details is', details)

    const backToMovies = () => {
        history.push('/')
    }

    return (
        <>
            <h1>Details</h1>
            {details.map((detail, i) => {
                return (
                    <div key={i}>
                        <img src={detail.poster} />
                        <h2>{detail.title}</h2>
                        <p>{detail.description}</p>
                    </div>
                )
            })}
            <ul>
                {genres.map((genre, i) => {
                    return (
                        <li key={i}>
                            {genre.name}
                        </li>
                    )
                })}
            </ul>
            <Button variant="contained" color="primary" onClick={backToMovies}>Back to Movie List</Button>
        </>
    )
}

export default Details;