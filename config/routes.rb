Rails.application.routes.draw do
  root 'spa#index'

  resources :posts, only: :index, defaults: { format: 'json' }
end
