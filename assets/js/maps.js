function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 46.619261,
            lng: -33.134766
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var location = [
    {lat:50.0911, lng:14.4016},
    {lat:50.0909, lng: 14.4005},
    {lat:50.0865, lng:14.4114},
    {lat:50.0870, lng:14.4207},
    {lat:50.0876, lng:14.4212},
    {lat:50.0810, lng:14.4280},
    {lat:50.0873, lng:14.4278},
    {lat:50.0863, lng:14.4068},
    {lat:50.0754, lng:14.4142}
];

    var markers = location.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}