require 'test_helper'

class PasswordsControllerTest < ActionController::TestCase
  def setup
  	@user = users(:user1)
  end

  test "should follow a user with Ajax" do
  	@request.env["devise.mapping"] = Devise.mappings[:user]
  	post :create, format: 'json'
  	assert_response :success
  end
end
