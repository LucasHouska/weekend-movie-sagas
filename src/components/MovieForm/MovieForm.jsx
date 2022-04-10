import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, TextField, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';

function MovieForm() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [newMovie, setNewMovie] = useState({
        title: '',
        poster: '',
        description: '',
        genre: ''
    });
    const [value, setValue] = useState('Genre')

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({ type: 'ADD_MOVIE', payload: newMovie })

        history.push('/')
    }

    console.log('Object in ADD_MOVIE', newMovie)
    return (
        <>
            <form onSubmit={handleSubmit}>
                <TextField id="standard-basic" label="Movie Title" onChange={(event) => { setNewMovie({ ...newMovie, title: event.target.value }) }} />
                {/* <input type='text' placeholder='Movie Title' onChange={(event) => { setNewMovie({...newMovie, title: event.target.value})}} /> */}
                <TextField id="standard-basic" label="Movie Poster" onChange={(event) => { setNewMovie({ ...newMovie, poster: event.target.value }) }} />
                {/* <input type='text' placeholder='Movie Poster URL' onChange={(event) => { setNewMovie({...newMovie, poster: event.target.value})}} /> */}
                <TextField id="standard-basic" label="Movie Description" onChange={(event) => { setNewMovie({ ...newMovie, description: event.target.value }) }} />
                {/* <input type='text' placeholder='Movie Description' onChange={(event) => { setNewMovie({ ...newMovie, description: event.target.value }) }} /> */}
                <FormControl style={{minWidth: 100}}>
                    <InputLabel id='InputLabel'>Genre</InputLabel>
                    <Select value={newMovie.genre_id} defaultValue={0} required name='genre' id="genre" onChange={(event) => { setNewMovie({ ...newMovie, genre_id: event.target.value }) }}>
                        <MenuItem value={0}>Choose a Genre</MenuItem>
                        <MenuItem value={1}>Adventure</MenuItem>
                        <MenuItem value='2'>Animated</MenuItem>
                        <MenuItem value='3'>Biographical</MenuItem>
                        <MenuItem value='4'>Comedy</MenuItem>
                        <MenuItem value='5'>Disaster</MenuItem>
                        <MenuItem value='6'>Drama</MenuItem>
                        <MenuItem value='7'>Epic</MenuItem>
                        <MenuItem value='8'>Fantasy</MenuItem>
                        <MenuItem value='9'>Musical</MenuItem>
                        <MenuItem value='10'>Romantic</MenuItem>
                        <MenuItem value='11'>Science Fiction</MenuItem>
                        <MenuItem value='12'>Space-Opera</MenuItem>
                        <MenuItem value='13'>Superhero</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="contained" color="primary" type='submit'>Save</Button>
            </form>
            <Button variant="contained" color="secondary" onClick={() => { history.push('/') }}>Cancel</Button>

        </>
    )
}

export default MovieForm;