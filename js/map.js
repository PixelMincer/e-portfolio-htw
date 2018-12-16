
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
      zoom: 10,
      mapTypeId: 'roadmap',
      /* For styling I used https://snazzymaps.com/style/127403/no-label-bright-colors */
      styles: [{
          "featureType": "all",
          "elementType": "all",
          "stylers": [{
              "saturation": "32"
            },
            {
              "lightness": "-3"
            },
            {
              "visibility": "on"
            },
            {
              "weight": "1.18"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "labels",
          "stylers": [{
            "visibility": "off"
          }]
        },
        {
          "featureType": "landscape",
          "elementType": "labels",
          "stylers": [{
            "visibility": "off"
          }]
        },
        {
          "featureType": "landscape.man_made",
          "elementType": "all",
          "stylers": [{
              "saturation": "-70"
            },
            {
              "lightness": "14"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels",
          "stylers": [{
            "visibility": "off"
          }]
        },
        {
          "featureType": "road",
          "elementType": "labels",
          "stylers": [{
            "visibility": "off"
          }]
        },
        {
          "featureType": "transit",
          "elementType": "labels",
          "stylers": [{
            "visibility": "off"
          }]
        },
        {
          "featureType": "water",
          "elementType": "all",
          "stylers": [{
              "saturation": "100"
            },
            {
              "lightness": "-14"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels",
          "stylers": [{
              "visibility": "off"
            },
            {
              "lightness": "12"
            }
          ]
        }
      ]
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
