export const fetchSongsComments = (songId) => (
  $.ajax({
    url:`api/songs/${songId}/comments`,
    method:'GET'
  })
);
