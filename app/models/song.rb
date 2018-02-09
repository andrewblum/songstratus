class Song < ApplicationRecord
  validates :user_id, :title, :artist, :album_image_url,
            presence: true
  has_attached_file :audio, default_url: "missing.png"
  validates_attachment_content_type :audio,
    content_type: ['audio/mpeg', 'audio/x-mpeg', 'audio/mp3',
                  'audio/x-mp3', 'audio/mpeg3', 'audio/x-mpeg3',
                  'audio/mpg', 'audio/x-mpg', 'audio/x-mpegaudio']
  has_attached_file :image, default_url: "//:0"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  belongs_to :user
  has_many :comments

  after_initialize :set_artist, :ensure_album_image_url

  def set_artist
    self.artist = User.find_by_id(self.user_id).username
  end

  def ensure_album_image_url
    self.album_image_url ||= "default.png"
  end

end
