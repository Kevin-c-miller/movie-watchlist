class MoviesController < ApplicationController
  before_action :set_movie, only: %i[  update destroy ]
  before_action :get_user


  # GET /movies
  def index
    @movies = @user.movies

    render json: @movies, include: :reviews
  end

  # GET /movies/1
  def show
    @user = User.find(params[:user_id])
    @movie = @user.movie.find(params[:movie_id])
    render json: @movie
  end

  # GET /movies/new
  def new
    @movie = @user.movies.build
  end


  # POST /movies
  def create

    @movie = @user.movies.build(movie_params)

    # @movie = Movie.new(movie_params)
    # @movie.user = @current_user
    # @movie.user_id = params[:user_id]
    
    
    if @movie.save
      render json: @movie, status: :created, location: @movie
    else
      render json: @movie.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /movies/1
  def update
    if @movie.update(movie_params)
      render json: @movie
    else
      render json: @movie.errors, status: :unprocessable_entity
    end
  end

  # DELETE /movies/1
  def destroy
    @movie.destroy

    render json: @movie
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def get_user
      @user = User.find(params[:user_id])
    end

    def set_movie
      # @movie = @user.movie.find(params[:id])
      # @movie = Movie.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def movie_params
      params.require(:movie).permit(:title, :poster, :rating, :synopsis, :director, :starring, :release_year, :runtime, :user_id)
    end
end
