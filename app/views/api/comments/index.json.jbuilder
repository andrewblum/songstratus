@comments.each do |comment|
  json.set! comment.id do
    json.body comment.body
    json.time comment.time
    json.user comment.user
    json.song comment.song
  end
end
