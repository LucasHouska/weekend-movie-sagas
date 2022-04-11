const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:movie_id', (req, res) => {

  const movieId = req.params.movie_id;
  console.log(movieId);

  const query = 
  `
  SELECT "movies".title, "genres".name FROM "movies"
  JOIN "movies_genres" ON "movies".id = "movies_genres".movie_id
  JOIN "genres" ON "genres".id = "movies_genres".genre_id
  WHERE "movies".id = $1
  `

  const value = [movieId]

  pool.query(query, value)
  .then(result => {
    res.send(result.rows)
  })
  .catch(err => {
    res.sendStatus(500)
  })
});

module.exports = router;