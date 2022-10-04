// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log('Body:', req.body);
  next();
});

// Your code here

app.get('/artists', (req, res) => {
  const data = getAllArtists();
  // res.status(200)
  // if (1) {
  //   return res.send('true')
  // }
  // other code
  res.json(data);
})

app.post('/artists', (req, res) => {
  // console.log(req.body);
  const data = addArtist(req.body);
  // res.status(201)
  res.statusCode = 201
  res.json(data);
})



const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));