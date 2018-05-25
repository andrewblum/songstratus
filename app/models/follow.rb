class Follow < ApplicationRecord
  validates :followee_id, :follower_id, presence: true
  belongs_to :follower,
    class_name: 'User',
    foreign_key: 'follower_id',
    primary_key: 'user_id'
  has_one :followee,
    class_name: 'User',
    foreign_key: 'followee_id',
    primary_key: 'user_id'
end
