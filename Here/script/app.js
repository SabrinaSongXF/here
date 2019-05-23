var platform = new H.service.Platform({
  app_id: 'WXJQte2xw2mO1jZvrvlp', // // <-- ENTER YOUR APP ID HERE
  app_code: 'PgYd30bTsNQyUvvVHef3pg', // <-- ENTER YOUR APP CODE HERE
});

var defaultLayers = platform.createDefaultLayers();
var mapContainer = document.getElementById('map-container');

//var map = new H.Map(
//  mapContainer,
//  defaultLayers.normal.map);


var map = new H.Map(
  mapContainer,
  defaultLayers.normal.map,
  mapOptions);


window.addEventListener('resize', function () {
  map.getViewPort().resize();
});

var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

var coordinates = {
  lat: 52.530974, // HERE HQ in Berlin, Germany
  lng: 13.384944
};

var mapOptions = {
  center: coordinates,
  zoom: 14
}


//var marker = new H.map.Marker(coordinates);
//map.addObject(marker);

var iconUrl = './images/icream.svg';

var iconOptions = {
	// The icon's size in pixel:
  size: new H.math.Size(26, 34),
	// The anchorage point in pixel, 
	// defaults to bottom-center
  anchor: new H.math.Point(14, 34)
};

var markerOptions = {
   icon: new H.map.Icon(iconUrl, iconOptions)
};

var marker = new H.map.Marker(coordinates, markerOptions);
map.addObject(marker);