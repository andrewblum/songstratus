class Api::SongsController < ApplicationController
  def create
    @song = Song.new(song_params)
    @song.save
  end

  def destroy
  end

  def show
    @song = Song.find_by(params[:id])
  end

  def update
  end

  private
  def song_params
    params.require(:song).permit(:title, :user_id, :audio)
  end
end
