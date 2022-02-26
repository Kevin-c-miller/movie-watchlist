class MoviesController < ApplicationController
  before_action :set_movie, only: %i[ show update destroy ]

  #  GET /users/:user_id/movies
  # def get_user_movies
  #   @user = User.find(params[:user_id])
  #   render json: @user.movies
  # end

  # POST /users/:user_id/movies
    # def post_user_movies
    #   @user = User.find(params[:user_id])
    #   @movie = Movie.new(movie_params)
    #   @movie.user = @current_user
  
    #   if @movie.save
    #     render json: @movie, status: :created, location: @movie
    #   else
    #     render json: @movie.errors, status: :unprocessable_entity
    #   end
    # end


  # GET /movies
  def index
    @user = User.find(params[:user_id])
    @movies = Movie.all

    render json: @user.movies, include: :reviews
  end


  # GET /movies/1
  def show
    render json: @movie
  end


  # POST /movies
  def create
    @user = User.find(params[:user_id])
    @movie = Movie.new(movie_params)
    @movie.user = @current_user
    
    puts movie.user

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
    def set_movie
      @movie = Movie.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def movie_params
      params.require(:movie).permit(:title, :poster, :rating, :synopsis, :director, :starring, :release_year, :runtime, :user_id)
    end
end
