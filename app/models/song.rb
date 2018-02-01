class Song < ApplicationRecord
  validates :user_id, :title, :artist, :album_image_url,
            presence: true

  
end
