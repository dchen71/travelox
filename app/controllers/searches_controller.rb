class SearchesController < ApplicationController
	before_action :logged_in?, only: [:search]

	def search
	end

	def query
		@response = Net::HTTP.get_response("example.com","/?search=thing&format=json")
		return render :json => {success: true, reponse: @reponse}
	end

	private
	def logged_in?
		redirect_to(root_url) unless signed_in?
		unless signed_in?
			flash[:notice] = "You need to be signed in to view that content"
		end
	end
end
