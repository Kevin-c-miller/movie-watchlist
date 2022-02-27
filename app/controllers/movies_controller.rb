class MoviesController < ApplicationController
  before_action :set_movie, only: %i[ show update destroy ]
  before_action :get_user

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
    @movies = @user.movies

    render json: @movies, include: :reviews
  end

  # GET /movies/1
  def show
    # render json: @movie
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
      @movie = @user.movie.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def movie_params
      params.require(:movie).permit(:title, :poster, :rating, :synopsis, :director, :starring, :release_year, :runtime, :user_id)
    end
end
