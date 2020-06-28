async function makeAPICall(url, headers) {
  const response = await fetch(url, {
    headers
  });
  return response.json();
}

$("#convert").on("click",function (event) {
    event.preventDefault();
        var amount = $("#amount").val();
            data = (makeAPICall(
	    `https://currency-converter13.p.rapidapi.com/convert?amount=${amount}&from=GBP&to=CZK`, {
		"x-rapidapi-host": "currency-converter13.p.rapidapi.com",
        "x-rapidapi-key": "5016226057msh752c3a66045bae2p13d849jsnd78e30e17efa"}));
        data.then((value) => {
        var converstion = value.amount.toFixed(2);
        document.getElementById("convetred").append("There are "+converstion+"kč to £"+amount);
        
        });

    });



$("#searchHotel").on("click",function(event){
    event.preventDefault();
    var ci = $("#ci").val();
    var adults = $("#people").val();
    var rooms = $("#rooms").val();
    var nights = $("#nights").val();
    data = (makeAPICall(`https://tripadvisor1.p.rapidapi.com/hotels/list?offset=0&currency=GBP&limit=30&order=asc&lang=en_US&sort=recommended&location_id=274707&adults=${adults}1&checkin=${ci}&rooms${rooms}1&nights=${nights}`, {
        "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
        "x-rapidapi-key": "5016226057msh752c3a66045bae2p13d849jsnd78e30e17efa"
}));
    data.then((value) => {
        var fhotelName = value.data[0].name;
        var fhotelPrice = value.data[0].price;
        var shotelName =value.data[1].name;
        var shotelPrice = value.data[1].price;
        var thotelName= value.data[2].name;
        var thotelPrice= value.data[2].price;
        document.getElementById("fhotel").append(fhotelName + " costing around " + fhotelPrice);
        document.getElementById("shotel").append(shotelName + " costing around " + shotelPrice);
        document.getElementById("thotel").append(thotelName + " costing around " + thotelPrice);
    })
});

$("#fly").on("click",function(event) {
    event.preventDefault();
    var dep = $("#dep").val();
    var rtn = $("#rtn").val();
    var airport = $("#airport").val();

    data = (makeAPICall(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/UK/GBP/en/${airport}-sky/PRG-sky/${dep}?inboundpartialdate=${rtn}`, {
        "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
        "x-rapidapi-key": "5016226057msh752c3a66045bae2p13d849jsnd78e30e17efa"
    }));
        data.then((value)=> {
            var flight = value.Quotes[0].MinPrice;
            var carrier = value.Carriers[0].Name;
            document.getElementById("flightResults").append("The cheapest flight found cost £"+flight + ", flying with "+carrier)
        })
});