'use strict';

const overlay = document.querySelector('.overlay');
const loading = document.querySelector('.loading');

mapboxgl.accessToken = 'pk.eyJ1IjoidGFtYW5jaGljaGFuIiwiYSI6ImNsZzEwamkwcjE0b20zcGxhdHk3b3Rnb2EifQ.WPkXz--D_pWcSZI2oMJBQQ';
  
const map = new mapboxgl.Map({
  center: [0, 0],
  container: 'map',
  pitch: 30,
  style: 'mapbox://styles/mapbox/streets-v11',
  zoom: 15
});

map.dragPan.disable();
map.doubleClickZoom.disable();
map.scrollZoom.disable();
map.touchZoomRotate.disable();

const marker = new mapboxgl.Marker();

function getLocation(position) {
  const {longitude, latitude} = position.coords;
  
  if (longitude && latitude) {
    map.setCenter([longitude, latitude]);
    marker.setLngLat([longitude, latitude]).addTo(map);
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 500);
  };
};

function errorHandler(event) {
  loading.style.animationPlayState = 'paused';
  console.log(event.message);
};

const options = {
  enableHighAccuracy: true,
  maximumAge: 0
}

if (navigator.geolocation) {
  navigator.geolocation.watchPosition(getLocation, errorHandler, options);
} else {
  console.log('Geolocation is not supported on this browser');
};