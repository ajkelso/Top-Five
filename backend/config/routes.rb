Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users 
  resources :lists 
  resources :categories

  post '/login', to: 'auth#create'
  get '/profile', to: 'users#profile'
  
end
