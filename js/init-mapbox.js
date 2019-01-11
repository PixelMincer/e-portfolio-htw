$(document).ready(function () {
    // The base code for the 3d effect of this map can be found under: https://www.mapbox.com/mapbox-gl-js/example/3d-buildings/ 
    const accessToken = 'pk.eyJ1IjoieWFubmlja2h1dHRlciIsImEiOiJjanFzMDBhbmYwc3JlNDFwZWVkNzFyam1nIn0.ejoZ9x24Blex-K0SM3C70Q';
    mapboxgl.accessToken = accessToken;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v9',
        center: [9.424434, 47.044814], // Location of Talackerstrasse 8, 8887 Mels SG
        zoom: 18.5,
        pitch: 45,
        bearing: -17.6
    });

    // disable map zoom when using scroll
    map.scrollZoom.disable();



    // The 'building' layer in the mapbox-streets vector source contains building-height
    // data from OpenStreetMap.
    map.on('load', function () {
        // Insert the layer beneath any symbol layer.
        var layers = map.getStyle().layers;

        var labelLayerId;
        for (var i = 0; i < layers.length; i++) {
            if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
                labelLayerId = layers[i].id;
                break;
            }
        }

        map.addLayer({
            'id': '3d-buildings',
            'source': 'composite',
            'source-layer': 'building',
            'filter': ['==', 'extrude', 'true'],
            'type': 'fill-extrusion',
            'minzoom': 15,
            'paint': {
                'fill-extrusion-color': '#aaa',

                // use an 'interpolate' expression to add a smooth transition effect to the
                // buildings as the user zooms in
                'fill-extrusion-height': [
                    "interpolate", ["linear"],
                    ["zoom"],
                    15, 0,
                    15.05, ["get", "height"]
                ],
                'fill-extrusion-base': [
                    "interpolate", ["linear"],
                    ["zoom"],
                    15, 0,
                    15.05, ["get", "min_height"]
                ],
                'fill-extrusion-opacity': .6
            }
        }, labelLayerId);
    });
});