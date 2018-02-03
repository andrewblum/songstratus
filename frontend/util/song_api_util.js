export const createSong = (song) => (
  $.ajax({
    url: 'api/songs',
    method: 'POST',
    data: song,
    contentType: false,
    processData: false
  })
);
