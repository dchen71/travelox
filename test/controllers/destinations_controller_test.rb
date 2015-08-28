require 'test_helper'

class DestinationsControllerTest < ActionController::TestCase
  def setup
  	@dest = destinations(:nyc)
  end

  test 'should show nyc' do
  	get :show, code: @dest.code
  	assert_response :success
  end
end
