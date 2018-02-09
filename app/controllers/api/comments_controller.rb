class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    @comment.save
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
    params.require(:comment).permit(:body, :time)
  end
end
