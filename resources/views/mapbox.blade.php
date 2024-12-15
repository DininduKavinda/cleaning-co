<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Google Map - Click to Get Coordinates</title>
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
    <script src="http://maps.googleapis.com/maps/api/js?sensor=false&callback=myMap"></script>
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
        function initMap() {
            // Create a new map centered on the given coordinates
            const center = { lat: 6.9209692563737235, lng: 79.87755895317827 };
            const map = new google.maps.Map(document.getElementById("map"), {
                zoom: 9,
                center: center,
            });

            // Add a click event listener to capture the latitude and longitude
            map.addListener("click", (mapsMouseEvent) => {
                const latLng = mapsMouseEvent.latLng;
                document.getElementById('latitude').value = latLng.lat();
                document.getElementById('longitude').value = latLng.lng();
            });
        }

        // Initialize the map
        window.onload = initMap;
    </script>
    [Matters -> view , edit , create , searchbox](http://chatgpt.com/share/67041dbf-41c0-800c-ac05-e755dbc4e309)
</body>
</html>
