function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: { lat: 50.0755, lng: 14.4378 },
    });
    //array of lables to be used by markers
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //use lables on markers for each location from location array
    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length],
        });
    });

    //marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers, { imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m" });
}
var locations = [
    { lat: 50.0911, lng: 14.4016 },
    { lat: 50.0909, lng: 14.4005 },
    { lat: 50.0865, lng: 14.4114 },
    { lat: 50.087, lng: 14.4207 },
    { lat: 50.081, lng: 14.428 },
    { lat: 50.0873, lng: 14.4278 },
    { lat: 50.0863, lng: 14.4068 },
    { lat: 50.0754, lng: 14.4142 },
    { lat: 50.0877, lng: 14.4227 },
];
