'use strict';

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(getLocation, errorHandler);
} else {
  alert('Geolocation is not supported by your browser');
};

let trackUser = navigator.geolocation.watchPosition(getLocation, errorHandler);

function getLocation(position) {
  // setInterval(() => {
    const {latitude, longitude} = position.coords;
  // }, 1000);
    mapboxgl.accessToken = 'pk.eyJ1IjoidGFtYW5jaGljaGFuIiwiYSI6ImNsZzEwamkwcjE0b20zcGxhdHk3b3Rnb2EifQ.WPkXz--D_pWcSZI2oMJBQQ';
  
    let map = new mapboxgl.Map({
      center: [longitude, latitude],
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 15
    });
    
    new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map);
  // }, 1000);
}

function errorHandler() {
  alert('Unable to retrieve your location');
}