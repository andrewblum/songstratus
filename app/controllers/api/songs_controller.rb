class Api::SongsController < ApplicationController
  def create
    @song = Song.new(song_params)
  end

  def destroy
  end

  def show
    @song = Song.find_by(params[:id])
  end

  def update
  end

  def song_params
    params.require(:song).permit(:title, :user_id)
end
