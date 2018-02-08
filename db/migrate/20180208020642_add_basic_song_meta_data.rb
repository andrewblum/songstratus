class AddBasicSongMetaData < ActiveRecord::Migration[5.1]
  def change
    add_column :songs, :description, :string
    add_column :songs, :genre, :string
    add_column :songs, :play_count, :integer
  end
end
