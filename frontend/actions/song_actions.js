import * as SongApiUtil from '../util/song_api_util';

export const RECEIVE_SONG = 'RECEIVE_SONG';
export const RECEIVE_ALL_SONGS = 'RECEIVE_ALL_SONGS';
export const RECEIVE_CURRENT_SONG = "RECEIVE_CURRENT_SONG";
export const PLAY_PAUSE = 'PLAY_PAUSE';
export const SET_PLAYED = 'SET_PLAYED';

export const receiveSong = (song) => ({
  type: RECEIVE_SONG,
  song
});

export const receiveAllSongs = (songs) => ({
  type: RECEIVE_ALL_SONGS,
  songs
});

export const receiveCurrentSong = (song) => ({
  type: RECEIVE_CURRENT_SONG,
  song
});

export const playPause = (bool) => ({
  type: PLAY_PAUSE,
  bool
});

export const setPlayed = (float) => ({
  type: SET_PLAYED,
  float
});

export const uploadSong = (song) => dispatch => (
  SongApiUtil.createSong(song)
    .then(songJSON => dispatch(receiveSong(songJSON)))
);

export const fetchAllUsersSongs = (userId) => dispatch => (
  SongApiUtil.fetchAllUsersSongs(userId)
  .then(songs => dispatch(receiveAllSongs(songs)))
);
