'use strict';

const loadingScreen = document.querySelector('.loading-screen');

mapboxgl.accessToken = 'pk.eyJ1IjoidGFtYW5jaGljaGFuIiwiYSI6ImNsZzEwamkwcjE0b20zcGxhdHk3b3Rnb2EifQ.WPkXz--D_pWcSZI2oMJBQQ';
  
const map = new mapboxgl.Map({
  center: [0, 0],
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  zoom: 15
});

map.dragPan.disable();

const marker = new mapboxgl.Marker();

function getLocation(position) {
  loadingScreen.style.display = 'none';
  
  const {longitude, latitude} = position.coords;
  
  if (longitude && latitude) {
    map.setCenter([longitude, latitude]);
    marker.setLngLat([longitude, latitude]).addTo(map);
  };
};

function errorHandler() {
  loadingScreen.style.animationPlayState = 'paused';
  alert('Unable to retrieve your location');
}

if (navigator.geolocation) {
  navigator.geolocation.watchPosition(getLocation, errorHandler);
} else {
  alert('Geolocation is not supported by your browser');
};