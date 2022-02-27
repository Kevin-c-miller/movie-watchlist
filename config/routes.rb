Rails.application.routes.draw do

  resources :users   do
   resources :movies
  end

  resources :movies do
    resources :reviews
  end

  # get '/users/:user_id/movies', to: 'movies#get_user_movies'
  # post '/users/:user_id/movies', to: 'movies#post_user_movies'
  # get '/reviews', to: 'reviews#get_all_reviews'

  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'


  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
