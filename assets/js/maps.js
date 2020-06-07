var castle = {lat:50.0911, lan:14.4016};
var stVitus ={lat:50.0909, lng:14.4005};
var charlesBridge = {lat:50.0865, lng:14.4114};
var clock = {lat:50.0870, lng:14.4207};
var oldTown = {lat:50.0876, lng:14.4212};
var wenceslasSquare = {lat:50.0810, lng:14.4280};
var powderTower = {lat:50.0873, lng:14.42780};
var lennonWall = {lat:50.0863, lng:14.4068};
var dancingHouse = {lat:50.0754, lng:14.4142};
var tyn = {lat:50.0877, lng:14.4227}

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: {
            lat: 50.0755,
            lng: 14.4378
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var location = [castle, stVitus,charlesBridge,clock,oldTown,wenceslasSquare,powderTower,lennonWall,dancingHouse,tyn];

    var markers = location.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}