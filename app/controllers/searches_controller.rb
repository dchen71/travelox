class SearchesController < ApplicationController
	before_action :logged_in?, only: [:search]

	def search

	end

	private
	def logged_in?
		redirect_to(root_url) unless signed_in?
		flash[:notice] = "You need to be signed in to view that content"
	end
end
