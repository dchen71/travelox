class RegistrationsController < Devise::RegistrationsController  
    respond_to :json

  # POST /resource
  def create
    build_resource(sign_up_params)

    resource.save
    yield resource if block_given?
    if resource.persisted?
      if resource.active_for_authentication?
        set_flash_message :notice, :signed_up if is_flashing_format?
        sign_up(resource_name, resource)
        return render :json => {success: true, location: after_sign_up_path_for(resource)}
      else
        set_flash_message :notice, :"signed_up_but_#{resource.inactive_message}" if is_flashing_format?
        expire_data_after_sign_in!
        return render :json => {success: true, location: after_inactive_sign_up_path_for(resource)}
      end
    else
      clean_up_passwords resource
      set_minimum_password_length
      return render :json => {success: false}
    end
  end
end  