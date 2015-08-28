require 'test_helper'

class RegistrationsControllerTest < ActionController::TestCase
  def setup
  	@user = users(:user1)
  end

  test "should create new user" do
  	@request.env["devise.mapping"] = Devise.mappings[:user]
  	post :create, format: 'json', user:{email: 'crab@kani.com', password: 'password', password_confirmation: 'password'}
  	assert_response :success
    body = JSON.parse(response.body)
    assert_equal true, body["success"]
  end
end
