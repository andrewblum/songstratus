class User < ApplicationRecord
  validates :profile_image_url, :password_digest, :session_token,
            presence: true
  validates :password,
            length: {minimum: 6, allow_nil: true}
  validates :username,
            presence: true,
            uniqueness: true

  has_many :songs

  attr_reader :password
  after_initialize :ensure_session_token, :ensure_profile_image

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    user && user.valid_password?(password) ? user : nil
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password);
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  def ensure_profile_image
    self.profile_image_url ||= "https://i.imgur.com/R3dvpLT.jpg"
  end

end
