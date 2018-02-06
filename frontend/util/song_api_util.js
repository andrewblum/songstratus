export const createSong = (song) => {
  console.log(song);
  return $.ajax({
    url: 'api/songs',
    method: 'POST',
    data: song,
    contentType: false,
    processData: false
  });
};

export const fetchSong = (id) => (
  $.ajax({
    url:`api/songs/${id}`,
    method:'GET'
  })
);

export const fetchAllUsersSongs = (userId) => (
  $.ajax({
    url:`api/users/${userId}/songs`,
    method: 'GET'
  })
);
