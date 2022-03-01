Rails.application.routes.draw do

  resources :users do
    resources :movies  do 
      resources :reviews
    end
  end

  # resources :movies  do 
  #   resources :reviews
  # end

  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  # get '/users/:user_id/movies', to: 'movies#get_user_movies'
  # post '/users/:user_id/movies', to: 'movies#post_user_movies'
  # get '/reviews', to: 'reviews#get_all_reviews'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
