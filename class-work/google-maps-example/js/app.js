var map;

      function initMap() {

      	// google.maps.Map(element, options)

        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.785091, lng: -73.968285},
          zoom: 11
        });
	
	var marker = new google.maps.Marker({
	  position: {lat: 40.785091, lng: -73.968285},
	  map: map,
	  title: 'Central Park, New York, NY'
	});

	var theMet = new google.maps.Marker({
	  position: {lat: 40.779473, lng: -73.962536},
	  map: map,
	  title: 'The Met, NY'
	});
}

	
// Turn on maps:

initMap();


