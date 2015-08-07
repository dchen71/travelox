class DestinationsController < ApplicationController
	def show
		@city = Destination.find_by(code: params[:code].upcase)
	end
end
