import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {useHistory} from 'react-router-dom';

function MovieForm() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [newMovie, setNewMovie] = useState({})

    const handleSubmit = (event) => {
        event.preventDefault();
        
        dispatch({ type: 'ADD_MOVIE', payload: newMovie })
        
        history.push('/')
    }

    console.log('Object in ADD_MOVIE', newMovie)
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Movie Title' onChange={(event) => { setNewMovie({...newMovie, title: event.target.value})}} />
                <input type='text' placeholder='Movie Poster URL' onChange={(event) => { setNewMovie({...newMovie, poster: event.target.value})}} />
                <input type='text' placeholder='Movie Description' onChange={(event) => { setNewMovie({...newMovie, description: event.target.value})}} />
                <select required name='genre' id="genre" onChange={(event) => { setNewMovie({...newMovie, genre_id: event.target.value})}}>
                    <option>Choose a genre</option>
                    <option value='1'>Adventure</option>klo b
                    <option value='2'>Animated</option>
                    <option value='3'>Biographical</option>
                    <option value='4'>Comedy</option>
                    <option value='5'>Disaster</option>
                    <option value='6'>Drama</option>
                    <option value='7'>Epic</option>
                    <option value='8'>Fantasy</option>
                    <option value='9'>Musical</option>
                    <option value='10'>Romantic</option>
                    <option value='11'>Science Fiction</option>
                    <option value='12'>Space-Opera</option>
                    <option value='13'>Superhero</option>
                </select>
                <input type='submit' value='Save' />
            </form>
            <button onClick={()=> {history.push('/')}}>Cancel</button>

        </>
    )
}

export default MovieForm;