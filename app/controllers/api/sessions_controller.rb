class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ['error'], status: 422
    end
  end

  def destroy
    render plain: 'not logged in', status: 404 if (!current_user)
    logout()
    render json: {}
  end

end
