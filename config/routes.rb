Rails.application.routes.draw do
  devise_for :users, :controllers => {sessions: 'sessions', registrations: 'registrations', passwords: 'passwords'}  
  root 'static_pages#home'
  get 'about' => 'static_pages#about'
  get 'destinations/:code' => 'destinations#show', as: 'city'
  get 'search' => 'searches#search'
  get '/search?:query' => 'search#query', as: 'query'

end
