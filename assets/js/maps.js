function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: {
            lat: 50.0755,
            lng: 14.4378,
        },
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var location = [
        { lat: 50.0911, lan: 14.4016 }, //castle
        { lat: 50.0909, lng: 14.4005 }, //StVitus
        { lat: 50.0865, lng: 14.4114 }, //CahrlesBridge
        { lat: 50.087, lng: 14.4207 }, //clock
        { lat: 50.0876, lng: 14.4212 }, //oldTownSquare
        { lat: 50.081, lng: 14.428 }, //wencelasSquare
        { lat: 50.0873, lng: 14.4278 }, //powdewrtower
        { lat: 50.0863, lng: 14.4068 }, //lennonWall
        { lat: 50.0754, lng: 14.4142 }, //Dancing House
        { lat: 50.0877, lng: 14.4227 }, //Tyn
    ];

    var markers = location.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length],
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m" });
}
