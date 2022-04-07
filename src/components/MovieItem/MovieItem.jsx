import { useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux';

function MovieItem({movie}) {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = () => {

        dispatch({type: 'FETCH_DETAILS', payload: movie.id})

        // history.push(`/details/${movie.id}`)
    }

    return (
        <div onClick={handleClick}>
            <h3>{movie.title}</h3>
            <img src={movie.poster} alt={movie.title} />
        </div>
    )
}

export default MovieItem;