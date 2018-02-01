class CreateSongs < ActiveRecord::Migration[5.1]
  def change
    create_table :songs do |t|
      t.integer :user_id, null: false
      t.integer :album_id
      t.integer :artist_id
      t.string :title, null: false
      t.string :artist, null: false
      t.string :year
      t.string :album_image_url
      t.string :length

      t.timestamps
    end
  end
end
