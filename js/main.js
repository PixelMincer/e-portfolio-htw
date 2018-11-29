$(document).ready(function () {
  $('.timeline').timeline({
    startIndex: 0,
    mode: 'vertical'
  });
});

// Initialize and add the map
function initMap() {
  // My location
  var myLocation = {
    lat: 47.044814,
    lng: 9.424434
  };
  // The map, centered at myLocation
  var map = new google.maps.Map(
    document.getElementById('map'), {
      center: myLocation,
      zoom: 20,
      mapTypeId: 'satellite'
    });
  // The marker, positioned at my location
  var marker = new google.maps.Marker({
    position: myLocation,
    map: map
  });

  var bounds = new google.maps.LatLngBounds();
  var loc = new google.maps.LatLng(marker.position.lat(), marker.position.lng());
  bounds.extend(loc);
}