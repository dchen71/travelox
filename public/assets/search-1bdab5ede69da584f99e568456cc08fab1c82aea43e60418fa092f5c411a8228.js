//Ajax correctors
$(document).ready(function() {
	//Ajax checker the search form
	$("#search").on("ajax:success", function(e, data, status, xhr) {
		$('.routes').empty();
		if(data.success ==  true){
			if(data.response != null){
				for(i=0; i< data.response.routes.length; i++){
					var routes = '';
					for(j=0; j< data.response.routes[i].segments.length; j++){
							routes = routes + '<div class="col-md-4 col-xs-4">' +
													'<h4>Segment ' + (j + 1) + '</h4>';
							if(data.response.routes[i].segments[j].sName == undefined)
								routes = routes + '<p class="segment-type">Departure</p><p>' + data.response.routes[i].segments[j].sCode + '</p>';
							else
								routes = routes + '<p class="segment-type">Departure</p><p>' + data.response.routes[i].segments[j].sName + '</p>';
							routes = routes + 	  '<p class="transport">' + data.response.routes[i].segments[j].kind.capitalize() + '</p>';
							if(data.response.routes[i].segments[j].tName == undefined)
								routes = routes + '<p class="segment-type">Stop</p><p>' + data.response.routes[i].segments[j].tCode + '</p>';
							else
								routes = routes + '<p class="segment-type">Stop</p><p>' + data.response.routes[i].segments[j].tName + '</p>';
							if(data.response.routes[i].segments[j].subkind == undefined)
								routes = routes + '<p class="transport">' + data.response.routes[i].segments[j].kind.capitalize() + '</p>';	
							else
								routes = routes + '<p class="transport">' + data.response.routes[i].segments[j].subkind.capitalize() + '</p>';
							routes = routes + '</div>';
					}
					$('.routes').append('<div class="col-md-8 col-md-push-2 col-md-pull-2 col-xs-8 col-xs-push-2 col-xs-pull-2 route-data">' +
											'<div class="route-data-header col-md-12  col-xs-12">' +
												'<h3>Route#' + (i + 1) + '</h3>' +
												'<h4 class="col-md-4 col-xs-4">From: ' + data.response.places[0].longName + '</h4>' +
												'<h4 class="col-md-offset-4 col-md-4 col-xs-offset-4 col-xs-4">To: ' + data.response.places[1].longName + '</h4>' +
											'</div>' +
											'<div class="route-data-content col-md-12 col-xs-12">' +
												'<p class="col-md-8 col-xs-8">Method of transportation: ' + data.response.routes[i].name + '</p>' +
												'<ul class="col-md-4 col-xs-4 list-unstyled">' +
													'<li>Approximate Duration: ' + Math.round(data.response.routes[i].duration / 60) + ' hours ' + '</li>' + 
													'<li>Estimated Price: ' + data.response.routes[i].indicativePrice.price + ' ' + data.response.routes[i].indicativePrice.currency + '</li>' +
													'<li>Number of Stops: ' + data.response.routes[i].stops.length + '</li>' +
												'</ul>' +
											'</div>' +
											'<div class="route-data-segments col-md-12 col-xs-12">' +
												routes + 
											'</div>' +
					 					'</div>');
				}
			}
			else{
				$('.routes').append('<div class="col-md-8 col-md-push-2 col-md-pull-2 col-xs-8 col-xs-push-2 col-xs-pull-2 route-data">' +
											'<h3 class="text-center">No routes found</h3>' +
					 					'</div>');				
			}
		}
		else{
				$('.routes').append('<div class="col-md-8 col-md-push-2 col-md-pull-2 col-xs-8 col-xs-push-2 col-xs-pull-2 route-data">' +
											'<h3 class="text-center">No routes found</h3>' +
					 					'</div>');		
		}
	}).on("ajax:error", function(e, xhr, status, error) {
			$('.routes').append('<div class="col-md-8 col-md-push-2 col-md-pull-2 col-xs-8 col-xs-push-2 col-xs-pull-2 route-data">' +
										'<h3 class="text-center">No routes found</h3>' +
				 					'</div>');		
	});
});

//Method to return uppercase of first letter
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
