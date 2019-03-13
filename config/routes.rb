Rails.application.routes.draw do

  namespace :api do
    get 'welcome/index'
    get '/say_something', to: 'welcome#say_something'
  end

  root 'welcome#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
