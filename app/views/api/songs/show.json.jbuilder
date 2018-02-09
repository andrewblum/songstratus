time = distance_of_time_in_words(@song.created_at, Time.now) + " ago"
json.id @song.id
json.artist @song.artist
json.title @song.title
json.user_id @song.user_id
json.image_url @song.image.url
json.audio_url @song.audio.url
json.description @song.description
json.created_at time
json.genre @song.genre
json.play_count @song.play_count
