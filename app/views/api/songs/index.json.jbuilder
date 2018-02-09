
@songs.each do |song|
  json.set! song.id do
    json.id song.id
    json.artist song.artist
    json.title song.title
    json.user_id song.user_id
    json.image_url song.image.url
    json.audio_url song.audio.url
    json.play_count song.play_count
    json.num_comments song.num_comments
  end
end
