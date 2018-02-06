import * as SongApiUtil from '../util/song_api_util';

export const RECEIVE_SONG = 'RECEIVE_SONG';
export const RECEIVE_ALL_SONGS = 'RECEIVE_ALL_SONGS';

export const receiveSong = (song) => ({
  type: RECEIVE_SONG,
  song
});

export const receiveAllSongs = (songs) => ({
  type: RECEIVE_ALL_SONGS,
  songs
});

export const uploadSong = (song) => dispatch => (
  SongApiUtil.createSong(song)
    .then(songJSON => dispatch(receiveSong(songJSON)))
);

export const fetchAllUsersSongs = (userId) => dispatch => (
  SongApiUtil.fetchAllUsersSongs(userId)
  .then(songs => dispatch(receiveAllSongs(songs)))
);
