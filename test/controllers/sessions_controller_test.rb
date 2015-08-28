require 'test_helper'

class SessionsControllerTest < ActionController::TestCase
  def setup
  	@user = users(:user1)
  end

  test 'should be able to login' do
  	@request.env["devise.mapping"] = Devise.mappings[:user]
  	#post :create, format: 'json', user: {email: @user.email, password: 'password'}
  	#assert_response :success
    #body = JSON.parse(response.body)
    #assert_equal true, body["success"]
  end
end
