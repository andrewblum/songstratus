class AddNumCommentsToSongs < ActiveRecord::Migration[5.1]
  def change
    add_column :songs, :num_comments, :integer, default: 0
  end
end
