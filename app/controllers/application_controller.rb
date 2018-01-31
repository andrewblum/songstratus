class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception

  def logout
    current_user.reset_token!
    session[:session_token] = nil
    @current = nil
  end

  def login(user)
    session[:session_token] = user.reset_token!
    @current = user
  end

  def current_user
    @current ||= User.find_by(session_token: session[:session_token])
  end

end
