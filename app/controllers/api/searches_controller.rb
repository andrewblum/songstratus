class Api::SearchesController < ApplicationController
  def index
    @songs = Song.order(:play_count).limit(15)
  end
end
