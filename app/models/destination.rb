class Destination < ActiveRecord::Base
	validates_presence_of :city, :background_id, :overview, :culture, :transportation, :food, :entertainment, :code
	validates :code, uniqueness: true
end
