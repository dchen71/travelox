class SessionsController < Devise::SessionsController  
  clear_respond_to  
  respond_to :json

  # POST /resource/sign_in
  def create
    self.resource = warden.authenticate!(auth_options)
    set_flash_message(:notice, :signed_in) if is_flashing_format?
    sign_in(resource_name, resource)
    yield resource if block_given?
    return render :json => {success: true, location: after_sign_in_path_for(resource)}
  end

  
end  