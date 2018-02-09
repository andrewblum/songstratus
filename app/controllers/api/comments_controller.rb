class Api::CommentsController < ApplicationController

  def create
    @song = Song.find_by_id(comment_params[:song_id])
    @song.num_comments += 1
    @song.save
    @comment = Comment.new(comment_params)
    @comment.save
    render "api/comments/show"
  end

  def index
    @comments = Comment.where(song_id: params[:song_id])
  end

  def show
  end

  def destroy
    @comment = Comment.find_by_id(params[:id])
    @comment.destroy
    render json: {}
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :time, :user_id, :song_id)
  end
end
