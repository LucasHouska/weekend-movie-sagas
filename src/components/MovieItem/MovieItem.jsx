import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button, CardActionArea, CardActions } from '@material-ui/core';

function MovieItem({ movie }) {

    const dispatch = useDispatch();
    const history = useHistory();


    const handleClick = () => {

        dispatch({ type: 'FETCH_DETAILS', payload: movie.id });
        dispatch({ type: 'FETCH_GENRES', payload: movie.id });

        history.push(`/details`);
    }

    return (
        <div className="cards">
            <Card sx={{ maxWidth: 245 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image={movie.poster}
                        alt={movie.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" align="justify">
                            {movie.title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button onClick={handleClick} size="small" color="primary">
                        More Details
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default MovieItem;