class AddAttachmentBannerImageToUsers < ActiveRecord::Migration[5.1]
  def self.up
    change_table :users do |t|
      t.attachment :banner_image
    end
  end

  def self.down
    remove_attachment :users, :banner_image
  end
end
