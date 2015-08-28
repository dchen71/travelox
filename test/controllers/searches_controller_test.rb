require 'test_helper'

class SearchesControllerTest < ActionController::TestCase
  def setup
  	@user = users(:user1)
  end

  test 'redirect if not logged in' do
  	get :search
  	assert_redirected_to root_path
  end

  test 'should be able to search' do
  	sign_in @user
  	get :search, format: 'json', start: 'France', dest: 'Germany'
  	assert_response :success
    body = JSON.parse(response.body)
    assert_equal true, body["success"]
    assert body["response"].length > 0
  end
end
