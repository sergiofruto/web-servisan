function loadHomeMap(){
	var myCenter = new google.maps.LatLng(-34.540168, -58.515786);
	var marker;
	function initialize() {
        var mapOptions = {
          scrollwheel: false,
          center: myCenter,
          zoom: 17,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map-frame"),
            mapOptions);
	    marker=new google.maps.Marker({
		  position:myCenter,
		  title:'General Carlos María de Alvear 1429, Florida Oeste, Buenos Aires'
		  });
		
		marker.setMap(map);
		
		var infowindow = new google.maps.InfoWindow({
		  content:"General Carlos María de Alvear 1429, Florida Oeste, Buenos Aires"
		});
		
		$(".not-map").each(function(i) {
		  google.maps.event.addDomListener(this, 'click', function(event){
          	map.setOptions({scrollwheel:false});
          });
		});

		
		google.maps.event.addListener(map, 'click', function(event){
          this.setOptions({scrollwheel:true});
        });
        
		infowindow.open(map,marker);
  	}


	google.maps.event.addDomListener(window, 'load', initialize);
}