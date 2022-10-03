Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get 'static_pages/index'
  root 'static_pages#index'

  # Create a folder called API under controllers
  namespace :api do
    resources :videos, only: [:index, :show]
  end
end
