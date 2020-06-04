$("#searchHotel").click(function() {
    var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = false;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://tripadvisor1.p.rapidapi.com/hotels/list?offset=0&currency=GBP&limit=30&order=asc&lang=en_US&sort=recommended&location_id=274707&adults=2&checkin=%3Crequired%3E&rooms=1&nights=2");
xhr.setRequestHeader("x-rapidapi-host", "tripadvisor1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "5016226057msh752c3a66045bae2p13d849jsnd78e30e17efa");

xhr.send(data);
});