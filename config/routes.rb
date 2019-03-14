Rails.application.routes.draw do

  namespace :api do
    get 'welcome/index'
    resources :users
    post '/login', to: 'users#login'
  end

  root 'welcome#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
