import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Details() {

    const history = useHistory();

    const details = useSelector(state => state.details)
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
                        <li>
                            {genre.name}
                        </li>
                    )
                })}
            </ul>
            <button onClick={backToMovies}>Back to Movie List</button>
        </>
    )
}

export default Details;