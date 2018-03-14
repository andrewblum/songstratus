export const createSong = (song) => {
  return $.ajax({
    url: 'api/songs',
    method: 'POST',
    data: song,
    contentType: false,
    processData: false
  });
};

export const fetchSong = (songId) => (
  $.ajax({
    url:`api/songs/${songId}`,
    method:'GET'
  })
);

export const fetchAllUsersSongs = (userId) => (
  $.ajax({
    url:`api/users/${userId}/songs`,
    method: 'GET'
  })
);

export const fetchTopSongs = () => (
  $.ajax({
    url:`api/searches`,
    methid: 'GET'
  })
);
