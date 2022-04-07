import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Details() {

    const history = useHistory();

    const details = useSelector(state => state.details)

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
                        <p>Show all genres for this movie</p>
                        <button onClick={backToMovies}>Back to movie list</button>
                    </div>
                )
            })}
        </>
    )
}

export default Details;