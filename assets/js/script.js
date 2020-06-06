async function makeAPICall(url, headers) {
  const response = await fetch(url, {
    headers
  });
  return response.json(); 	
}

$("#convert").click(function () {
    	var amount = $("#amount").val();
	makeAPICall(`https://currency-exchange.p.rapidapi.com/exchange?q=${amount}&from=GBP&to=CZK`, {
		"x-rapidapi-host": "currency-exchange.p.rapidapi.com",
		"x-rapidapi-key": "5016226057msh752c3a66045bae2p13d849jsnd78e30e17efa"
    });
});


$("#searchHotel").click(function(){
    makeAPICall("https://tripadvisor1.p.rapidapi.com/hotels/list?offset=0&currency=GBP&limit=30&order=asc&lang=en_US&sort=recommended&location_id=274707&adults=2&checkin=%3Crequired%3E&rooms=1&nights=2", {
        "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
        "x-rapidapi-key": "5016226057msh752c3a66045bae2p13d849jsnd78e30e17efa"
    });
});

$("#search").click(function() {
    var dateOut = $("#dateOut").val();
    var dateIn = $("#dateIn").val();
    var dep = $("#dep").val();

    makeAPICall(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/UK/GBP/en/${dep}-sky/PRG-sky/${dateOut}?inboundpartialdate=${dateIn}`, {
        "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
        "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
    });
});