<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mapbox Map</title>
    <script src="https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.js"></script>
    <link href="https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.css" rel="stylesheet" />
    <style>
        /* Set the size of the map */
        #map {
            height: 500px;
            width: 100%;
        }
        body {
            font-family: Arial, sans-serif;
        }
    </style>
</head>
<body>
    <h1>Click on the Map to Get Latitude and Longitude</h1>
    <div id="map"></div>

    <form>
        <label for="latitude">Latitude:</label>
        <input type="text" id="latitude" name="latitude" readonly>
        <br>
        <label for="longitude">Longitude:</label>
        <input type="text" id="longitude" name="longitude" readonly>
    </form>

    <script>
        // Set your Mapbox access token
        mapboxgl.accessToken = 'pk.eyJ1Ijoic3dhcG15cmlkZSIsImEiOiJjbGJidGxwbWwxaWI5M3Btcmt5aG1qM3QzIn0.a6HysriQllTrSISuxRgyXw';

        // Initialize the map
        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // map style
            center: [79.87755895317827,6.9209692563737235], // initial map center [lng, lat]
            zoom: 9 // initial zoom level
        });

        // Add a click event listener to the map
        map.on('click', (e) => {
            // Get the longitude and latitude from the click event
            const longitude = e.lngLat.lng;
            const latitude = e.lngLat.lat;

            // Update the input fields with the longitude and latitude
            document.getElementById('latitude').value = latitude;
            document.getElementById('longitude').value = longitude;
        });
    </script>
</body>
</html>
