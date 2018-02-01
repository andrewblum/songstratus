class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?

  def logout
    current_user.reset_token!
    session[:session_token] = nil
    @current = nil
  end

  def login(user)
    session[:session_token] = user.reset_token!
    @current = user
  end

  def logged_in?
    !!current_user
  end

  def current_user
    @current ||= User.find_by(session_token: session[:session_token])
  end

  def require_logged_in
    unless current_user
      render json: { base: ['invalid credentials'] }, status: 401
    end
  end

end
