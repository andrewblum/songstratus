@comments.each do |comment|
  time = distance_of_time_in_words(comment.created_at, Time.now) + " ago"
  json.set! comment.id do
    json.id comment.id
    json.body comment.body
    json.time comment.time
    json.created_at time
    json.user_image comment.user.profile_image.url
    json.username comment.user.username
    json.user_id comment.user_id
    json.song_id comment.song_id
  end
end
