'use strict';

const loadingScreen = document.querySelector('.loading-screen');

function getLocation(position) {
  loadingScreen.style.display = 'none';
  
  const {latitude, longitude} = position.coords;
  
  mapboxgl.accessToken = 'pk.eyJ1IjoidGFtYW5jaGljaGFuIiwiYSI6ImNsZzEwamkwcjE0b20zcGxhdHk3b3Rnb2EifQ.WPkXz--D_pWcSZI2oMJBQQ';
  
  let map = new mapboxgl.Map({
    center: [longitude, latitude],
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 15
  });
  
  new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map);
}

function errorHandler() {
  loadingScreen.style.animationPlayState = 'paused';
  alert('Unable to retrieve your location');
}

if (navigator.geolocation) {
  navigator.geolocation.watchPosition(getLocation, errorHandler);
} else {
  alert('Geolocation is not supported by your browser');
};