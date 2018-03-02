import * as SongApiUtil from '../util/song_api_util';

export const RECEIVE_SONG = 'RECEIVE_SONG';
export const RECEIVE_ALL_SONGS = 'RECEIVE_ALL_SONGS';
export const RECEIVE_CURRENT_SONG = "RECEIVE_CURRENT_SONG";
export const PLAY_PAUSE = 'PLAY_PAUSE';
export const SET_PLAYED = 'SET_PLAYED';
export const SET_FETCH_PLAY_TIME_FOR_COMMENT = "SET_FETCH_PLAY_TIME_FOR_COMMENT";
export const SET_PLAY_TIME_FOR_COMMENT = "SET_PLAY_TIME_FOR_COMMENT";
export const RECEIVE_PLAY_TIME_FOR_COMMENT = "RECEIVE_PLAY_TIME_FOR_COMMENT";
export const SET_SEEK_PLAYER_TO = "SET_SEEK_PLAYER_TO";

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

export const setFetchPlayTimeForComment = (flag) => ({
  type: SET_FETCH_PLAY_TIME_FOR_COMMENT,
  flag
});

export const setPlayTimeForComment = (time) => ({
  type: RECEIVE_PLAY_TIME_FOR_COMMENT,
  time
});

export const setSeekPlayerTo = (time) => ({
  type: SET_SEEK_PLAYER_TO,
  time
});

export const uploadSong = (song) => dispatch => (
  SongApiUtil.createSong(song)
    .then(songJSON => dispatch(receiveSong(songJSON)))
);

export const fetchAllUsersSongs = (userId) => dispatch => (
  SongApiUtil.fetchAllUsersSongs(userId)
    .then(songs => dispatch(receiveAllSongs(songs)))
);

export const fetchSong = (songId) => dispatch => (
  SongApiUtil.fetchSong(songId)
    .then(song => dispatch(receiveSong(song)))
);
