class PasswordsController < Devise::PasswordsController
  respond_to :json

  # POST /resource/password
  def create
    self.resource = resource_class.send_reset_password_instructions(resource_params)
    yield resource if block_given?

    if successfully_sent?(resource)
      return render :json => {:success => true,location: after_sending_reset_password_instructions_path_for(resource_name)}
    else
      return render :json => {:success => false}
    end
  end
end
