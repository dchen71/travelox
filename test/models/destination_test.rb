require 'test_helper'

class DestinationTest < ActiveSupport::TestCase
  def setup
  	@dest = Destination.new(city: 'A', background_id: 'a', overview: 'a', culture: 'a', transportation: 'a', food: 'a', entertainment: 'a', code: 'abc')
  end

  test 'is valid' do
  	assert @dest.valid?
  end

  test 'code is unique' do
  	@dest.save
  	@newdest = Destination.new(city: 'A', background_id: 'a', overview: 'a', culture: 'a', transportation: 'a', food: 'a', entertainment: 'a', code: 'abc')  
  	assert_not @newdest.valid?	
  end

  test 'validates presence of city' do
  	@dest.city = ''
  	assert_not @dest.valid?
  end

  test 'validates presence of background_id' do
  	@dest.background_id = ''
  	assert_not @dest.valid?
  end

  test 'validates presence of overview' do
  	@dest.overview = ''
  	assert_not @dest.valid?
  end

  test 'validates presence of culture' do
  	@dest.culture = ''
  	assert_not @dest.valid?
  end
  
  test 'validates presence of transportation' do
  	@dest.transportation = ''
  	assert_not @dest.valid?
  end

  test 'validates presence of food' do
  	@dest.food = ''
  	assert_not @dest.valid?
  end

  test 'validates presence of entertainment' do
  	@dest.entertainment = ''
  	assert_not @dest.valid?
  end

  test 'validates presence of code' do
  	@dest.code = ''
  	assert_not @dest.valid?
  end
end
