class SearchesController < ApplicationController
	before_action :logged_in?, only: [:search]

	def search
		if params[:start] && params[:dest]
			link = "http://free.rome2rio.com/api/1.2/json/Search?key=#{ENV["rome"]}&oName=#{params[:start].delete(' ')}&dName=#{params[:dest].delete(' ')}"
			response = HTTParty.get(link)
			return render :json => {success: true , response: response}		
		end
	end

	def query
		@response = Net::HTTP.get_response("example.com","/?search=thing&format=json")
		@data = JSON.parse(@response)
		return render :json => {success: true, reponse: @data}
	end

	private
	def logged_in?
		redirect_to(root_url) unless signed_in?
		unless signed_in?
			flash[:notice] = "You need to be signed in to view that content"
		end
	end
end
