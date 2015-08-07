Rails.application.routes.draw do
  devise_for :users
  root 'static_pages#home'
  get 'about' => 'static_pages#about'
  get 'destinations/nyc' => 'destinations#nyc', as: 'nyc'
  get 'destinations/mxp' => 'destinations#mxp', as: 'mxp'
  get 'destinations/nrt' => 'destinations#nrt', as: 'nrt'
  get 'destinations/sfo' => 'destinations#sfo', as: 'sfo'
  get 'destinations/prg' => 'destinations#prg', as: 'prg'

end
