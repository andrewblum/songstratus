import * as SongApiUtil from '../util/song_api_util';

export const RECEIVE_SONG = 'RECEIVE_SONG';

export const receiveSong = (song) => ({
  type: RECEIVE_SONG,
  song
});

export const uploadSong = (song) => dispatch => (
  SongApiUtil.createSong(song)
    .then(songJSON => dispatch(receiveSong(songJSON)))
);
