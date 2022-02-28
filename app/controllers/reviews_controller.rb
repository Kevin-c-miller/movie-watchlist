class ReviewsController < ApplicationController
  before_action :set_movie
  before_action :set_review, only: %i[ show update destroy ]
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /reviews
  def index
    @movie = Movie.find(params[:movie_id])
    @reviews = @movie.reviews

    render json: @reviews, include: :user
  end

  # # Get /reviews all
  # def get_all_reviews
  #   @user = User.find([params[:user_id]])
  #   render json: @user.reviews
  # end


  # GET /reviews/1
  def show
    render json: @review
  end

  # GET /reviews/new
  def new
    @review = @movie.reviews.build
    @review.user = current_user

  end

  # POST /reviews
  def create
    @review = @movie.reviews.build(review_params)
    @review.user = @current_user
    @review.movie_id = params[:movie_id]

    if @review.save
      render json: @review, status: :created
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /reviews/1
  def update
    if @review.update(review_params)
      render json: @review
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  # DELETE /reviews/1
  def destroy
    @review.destroy

    render json: @review
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_movie 
      @movie = Movie.find(params[:movie_id])
    end

    def set_review
      @review = @movie.reviews.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def review_params
      params.require(:review).permit(:title, :rating, :review, :user_id, :movie_id)
    end
end
