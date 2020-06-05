function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: {
            lat: 46.619261,
            lng: -33.134766
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var location = [
    {lat:50.0911, lng:14.4016}.addClass(".castle"),
    {lat:50.0909, lng:14.4005}.addClass(".stVitus"),
    {lat:50.0865, lng:14.4114}.addClass(".charlesBridge"),
    {lat:50.0870, lng:14.4207}.addClass(".clock"),
    {lat:50.0876, lng:14.4212}.addClass("oldTown"),
    {lat:50.0810, lng:14.4280}.addClass(".wenceslasSquare"),
    {lat:50.0873, lng:14.4278}.addClass(".powderTower"),
    {lat:50.0863, lng:14.4068}.addClass(".lennonWall"),
    {lat:50.0754, lng:14.4142}.addClass(".dancingHouse"),
    {lat:50.0877, lng:14.4227}.addClass(".tyn")
];

    var markers = location.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}