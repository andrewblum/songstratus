Rails.application.routes.draw do
  namespace :api do
    get 'songs/create'
  end

  namespace :api do
    get 'songs/destroy'
  end

  namespace :api do
    get 'songs/show'
  end

  namespace :api do
    get 'songs/update'
  end

  root 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
