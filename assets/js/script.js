//general function to call API
async function makeAPICall(url, headers) {
    const response = await fetch(url, {
        headers,
    });
    return response.json();
}
//converter API
$("#convert").on("click", function (event) {
    //prevent default to stop refresh
    event.preventDefault();
    //amount to populate URL for API call
    var amount = $("#amount").val();
    data = makeAPICall(`https://currency-converter13.p.rapidapi.com/convert?amount=${amount}&from=GBP&to=CZK`, {
        "x-rapidapi-host": "currency-converter13.p.rapidapi.com",
        "x-rapidapi-key": "5016226057msh752c3a66045bae2p13d849jsnd78e30e17efa",
    });
    data.then((value) => {
        //toFixed to have 2 decimal places
        var converstion = value.amount.toFixed(2);
        //use API data to provide results
        document.getElementById("convetred").append("There are " + converstion + "kč to £" + amount);
    });
});

//Hotel API
$("#searchHotel").on("click", function (event) {
    //preventDefault to stop refresh
    event.preventDefault();
    //credentials to populate URL for API
    var ci = $("#ci").val();
    var adults = $("#people").val();
    var rooms = $("#rooms").val();
    var nights = $("#nights").val();
    data = makeAPICall(`https://tripadvisor1.p.rapidapi.com/hotels/list?offset=0&currency=GBP&limit=30&order=asc&lang=en_US&sort=recommended&location_id=274707&adults=${adults}1&checkin=${ci}&rooms${rooms}1&nights=${nights}`, {
        "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
        "x-rapidapi-key": "5016226057msh752c3a66045bae2p13d849jsnd78e30e17efa",
    });
    data.then((value) => {
        //name and price of hotel 1
        var fhotelName = value.data[0].name;
        var fhotelPrice = value.data[0].price;
        //name and price of hotel 2
        var shotelName = value.data[1].name;
        var shotelPrice = value.data[1].price;
        //name and price of hotel 3
        var thotelName = value.data[2].name;
        var thotelPrice = value.data[2].price;
        //use API data to fill in results area for all 3 hotels
        document.getElementById("fhotel").append(fhotelName + " costing around " + fhotelPrice);
        document.getElementById("shotel").append(shotelName + " costing around " + shotelPrice);
        document.getElementById("thotel").append(thotelName + " costing around " + thotelPrice);
    });
});

//flights API
$("#fly").on("click", function (event) {
    //preventDefault to stop refresh
    event.preventDefault();
    //departure and return dates and chosen airport
    var dep = $("#dep").val();
    var rtn = $("#rtn").val();
    var airport = $("#airport").val();

    data = makeAPICall(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/UK/GBP/en/${airport}-sky/PRG-sky/${dep}?inboundpartialdate=${rtn}`, {
        "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
        "x-rapidapi-key": "5016226057msh752c3a66045bae2p13d849jsnd78e30e17efa",
    });
    data.then((value) => {
        //use API data to get price and carrier name
        var flight = value.Quotes[0].MinPrice;
        var carrier = value.Carriers[0].Name;
        //use variables to fill out results section
        document.getElementById("flightResults").append("The cheapest flight found cost £" + flight + ", flying with " + carrier);
    });
});

var field = document.getElementById('ci');
var picker = new Pikaday({
    onSelect: function(date) {
        field.value = picker.toString(date, format = 'YYYY-MM-DD');
    }
});
$("#ci").on("click",function() {
field.parentNode.insertBefore(picker.el, field.nextSibling)});
    $("#ci").append(picker);

