//Setup the modals
$(document).ready(function(){
    $("#signup").click(function(){
        $("#signup-modal").modal();
    });
    $("#login").click(function(){
        $("#login-modal").modal();
    });
});

//Ajax correctors
$(document).ready(function() {
	//Ajax checker the forgot password form
	$("#forgot_password_user").on("ajax:success", function(e, data, status, xhr) {
		if(data.success ==  true){
			$('#forgot_password_user').prepend('<div class="alert alert-success fade in">' +
											  '<button type="button" class="close" data-dismiss="alert" >×</button>' + 
			 								  '<p>Reset email sent</p>' + 
			 								  '</div>');
		}
		else{
			$('#forgot_password_user').prepend('<div class="alert alert-warning fade in">' +
											  '<button type="button" class="close" data-dismiss="alert" >×</button>' + 
			 								  '<p>User does not exist</p>' + 
			 								  '</div>');
		}
	}).on("ajax:error", function(e, xhr, status, error) {
		$('#forgot_password_user').prepend('<div class="alert alert-danger fade in">' +
									      '<button type="button" class="close" data-dismiss="alert" >×</button>' + 
									      '<p>Error connecting to server</p>' + 
									      '</div>');
	});

	//Ajax checker for the sign up form
	$("#sign_up_user").on("ajax:success", function(e, data, status, xhr) {
		if(data.success ==  true){
			$('#sign_up_user').prepend('<div class="alert alert-success fade in">' +
											  '<button type="button" class="close" data-dismiss="alert" >×</button>' + 
			 								  '<p>User successfully create, logging in</p>' + 
			 								  '</div>');
			$('#signup-modal').modal('hide');
			$('.signed_out').hide();
			$('#navbar').append('<div class="signed_in">' + 
            					'<ul class="nav navbar-nav navbar-right">' + 
              					'<li><a href="/search">Search</a></li>' +
              					'<li><a href="/users/sign_out" data-method="delete" id="logout">Log out</a></li>' +
            					'</ul>' +
          						'</div>');
			$('#notices').append('<div class="alert alert-success fade in">' + 
								'<button type="button" class="close" data-dismiss="alert" >×</button>' +
								'<strong>Successfully created user and logged in</strong>' +
								'</div>');
		}
		else{
			$('#sign_up_user').prepend('<div class="alert alert-warning fade in">' +
											  '<button type="button" class="close" data-dismiss="alert" >×</button>' + 
			 								  '<p>Email already taken, or passwords must be greater than 8 characters and matching</p>' + 
			 								  '</div>');
		}
	}).on("ajax:error", function(e, xhr, status, error) {
		$('#sign_up_user').prepend('<div class="alert alert-danger fade in">' +
									      '<button type="button" class="close" data-dismiss="alert" >×</button>' + 
									      '<p>Error connecting to server</p>' + 
									      '</div>');
	});

	//Ajax checker for the sign up form
	$("#log_in_user").on("ajax:success", function(e, data, status, xhr) {
		if(data.success ==  true){
			$('#log_in_user').prepend('<div class="alert alert-success fade in">' +
											  '<button type="button" class="close" data-dismiss="alert" >×</button>' + 
			 								  '<p>Successfully logged in</p>' + 
			 								  '</div>');
			$('#login-modal').modal('hide');
			$('.signed_out').hide();
			$('#navbar').append('<div class="signed_in">' + 
            					'<ul class="nav navbar-nav navbar-right">' + 
              					'<li><a href="/search">Search</a></li>' +
              					'<li><a href="/users/sign_out" data-method="delete" id="logout">Log out</a></li>' +
            					'</ul>' +
          						'</div>');
			$('#notices').append('<div class="alert alert-success fade in">' + 
								'<button type="button" class="close" data-dismiss="alert" >×</button>' +
								'<strong>Logged in</strong>' +
								'</div>');
		}
		else{
			$('#log_in_user').prepend('<div class="alert alert-warning fade in">' +
											  '<button type="button" class="close" data-dismiss="alert" >×</button>' + 
			 								  '<p>Email/password combination incorect</p>' + 
			 								  '</div>');
		}
	}).on("ajax:error", function(e, xhr, status, error) {
		$('#log_in_user').prepend('<div class="alert alert-danger fade in">' +
									      '<button type="button" class="close" data-dismiss="alert" >×</button>' + 
									      '<p>Error connecting to server</p>' + 
									      '</div>');
	});

	signOut = function() {
	  var params = {
	    dataType: "json",
	    type: "DELETE",
	    url: this.urlRoot + "/sign_out.json"
	  };
	  var self = this;
	  return $.ajax(params).done(function(data) {
	    self.set("csrf-token", data.csrfToken);
	    self.unset("user");
	  });
	}

	$('#logout').click(function(){
		signOut();
		
	})
});
