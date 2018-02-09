class Api::SongsController < ApplicationController
  def create
    @song = Song.new(song_params)
    @song.save
  end

  def destroy
  end

  def show
    @song = Song.find_by(id: params[:id])
  end

  def update
  end

  def index
    @songs = Song.where(user_id: params[:user_id])
  end

  private
  def song_params
    params.require(:song).permit(:title, :user_id, :audio, :image)
  end
end
