class Song < ApplicationRecord
  validates :user_id, :title, :artist, :album_image_url,
            presence: true
  has_attached_file :audio, default_url: "missing.png"
  validates_attachment_content_type :audio,
    content_type: ['audio/mpeg', 'audio/x-mpeg', 'audio/mp3',
                  'audio/x-mp3', 'audio/mpeg3', 'audio/x-mpeg3',
                  'audio/mpg', 'audio/x-mpg', 'audio/x-mpegaudio']

  belongs_to :user


end
