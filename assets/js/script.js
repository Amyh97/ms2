async function makeAPICall(url, headers) {
  const response = await fetch(url, {
    headers
  });
  
}

$("#convert").on("click",function (event) {
    event.preventDefault();
    	var amount = $("#amount").val();
	makeAPICall(`https://currency-exchange.p.rapidapi.com/exchange?q=${amount}&from=GBP&to=CZK`, {
		"x-rapidapi-host": "currency-exchange.p.rapidapi.com",
		"x-rapidapi-key": "5016226057msh752c3a66045bae2p13d849jsnd78e30e17efa"
    });

});


$("#searchHotel").on("click",function(){
    makeAPICall("https://tripadvisor1.p.rapidapi.com/hotels/list?offset=0&currency=GBP&limit=30&order=asc&lang=en_US&sort=recommended&location_id=274707&adults=2&checkin=%3Crequired%3E&rooms=1&nights=2", {
        "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
        "x-rapidapi-key": "5016226057msh752c3a66045bae2p13d849jsnd78e30e17efa"
    });
});

$("#fly").on("click",function(event) {
    event.preventDefault();
    var dep = $("#dep").val();
    var rtn = $("#rtn").val();
    var airport = $("#airport").val();

    makeAPICall(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/UK/GBP/en/${airport}-sky/PRG-sky/${dep}?inboundpartialdate=${rtn}`, {
        "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
        "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
    });
    addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
        console.log(this.responseText);
        document.getElementById("results").innerHTML(`
        <p>The cheapest flight found was £${Quotes[0].MinPrice}, flying with ${help}</p>`);
	} 
});
});