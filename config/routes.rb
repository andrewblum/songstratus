Rails.application.routes.draw do

  root 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :songs, only: [:create, :destroy, :update, :show] do
      resources :comments, only: [:create, :destroy, :index]
    end
    resources :users, only: [:create, :show, :update] do
      resources :songs, only: [:index]
    end
    resource :session, only: [:create, :destroy]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
