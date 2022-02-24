class WatchListsController < ApplicationController
  before_action :set_watch_list, only: %i[ show update destroy ]

  # GET /watch_lists
  def index
    @watch_lists = WatchList.all

    render json: @watch_lists
  end

  # GET /watch_lists/1
  def show
    render json: @watch_list
  end

  # POST /watch_lists
  def create
    @watch_list = WatchList.new(watch_list_params)

    if @watch_list.save
      render json: @watch_list, status: :created, location: @watch_list
    else
      render json: @watch_list.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /watch_lists/1
  def update
    if @watch_list.update(watch_list_params)
      render json: @watch_list
    else
      render json: @watch_list.errors, status: :unprocessable_entity
    end
  end

  # DELETE /watch_lists/1
  def destroy
    @watch_list.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_watch_list
      @watch_list = WatchList.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def watch_list_params
      params.require(:watch_list).permit(:movie_watched, :user_id)
    end
end
