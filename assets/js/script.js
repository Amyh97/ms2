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
    //template literals used so jQuery can also be used
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

//Hotel
//API call
$("#searchHotel").on("click", function (event) {
    //preventDefault to stop refresh
    event.preventDefault();
    //credentials to populate URL for API
    var ci = $("#ci").val();
    var adults = $("#people").val();
    var rooms = $("#rooms").val();
    var nights = $("#nights").val();
    // call generic function
    data = makeAPICall(`https://tripadvisor1.p.rapidapi.com/hotels/list?offset=0&currency=GBP&limit=30&order=asc&lang=en_US&sort=recommended&location_id=274707&adults=${adults}1&checkin=${ci}&rooms${rooms}1&nights=${nights}`, {
        "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
        "x-rapidapi-key": "5016226057msh752c3a66045bae2p13d849jsnd78e30e17efa",
    });
    data.then((value) => {
        //pick hotels from array of data returned
        var firstHotel = value.data[0];
        var secondHotel = value.data[1];
        var thirdHotel = value.data[2];
        //use API data to fill in results area for all 3 hotels
        document.getElementById("fhotel").append(firstHotel.name + " costing around " + firstHotel.price);
        document.getElementById("shotel").append(secondHotel.name + " costing around " + secondHotel.price);
        document.getElementById("thotel").append(thirdHotel.name + " costing around " + thirdHotel.price);
    });
});

//flights
//API call
$("#fly").on("click", function (event) {
    //preventDefault to stop refresh
    event.preventDefault();
    //departure and return dates and chosen airport to fill URL
    var dep = $("#dep").val();
    var rtn = $("#rtn").val();
    var airport = $("#airport").val();

    data = makeAPICall(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/UK/GBP/en/${airport}-sky/PRG-sky/${dep}?inboundpartialdate=${rtn}`, {
        "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
        "x-rapidapi-key": "8e454c9b0dmshf8a12541aa166abp100ea0jsnb6ef553fc5b2",
    });
    data.then((value) => {
        //use API data to get price and carrier name
        var flight = value.Quotes[0].MinPrice;
        var carrier = value.Carriers[0].Name;
        //use variables to fill out results section
        document.getElementById("flightResults").append("The cheapest flight found cost £" + flight + ", flying with " + carrier);
    });
});

//date pickers to populate URLs for API calls, work on all browsers unlike type=date

//all in var stay so nothing is universal and avoid confusion with other date pickers in script.js
var stay = function () {
    //formats date, determined by API documentation
    var field = document.getElementById("ci");
    var picker = new Pikaday({
        onSelect: function () {
            field.value = this.getMoment().format("YYYY-MM-DD");
        },
    });
    //pik-date id on label to close picker
    var pickerOpen = false;
    $("#pik-date").click(function () {
        pickerOpen ? picker.hide() : picker.show();
        pickerOpen = !pickerOpen;
    });
    //adds datepicker element to page when field is clicked
    $("#ci").on("click", function () {
        field.parentNode.insertBefore(picker.el, field.nextSibling);
    });
};
$("#ci").append(stay);

// var departure keeps all information to the date picker only for the separture date
var departure = function () {
    //format for date determined by API documentation
    var field = document.getElementById("dep");
    var picker = new Pikaday({
        onSelect: function () {
            field.value = this.getMoment().format("YYYY-MM-DD");
        },
    });
    //pik id on label used to close date picker without opening again when return date picker is opened
    var pickerOpen = false;
    $("#pik").click(function () {
        pickerOpen ? picker.hide() : picker.show();
        pickerOpen = !pickerOpen;
    });
    //adds datepicker element to page when field is clicked
    $("#dep").on("click", function () {
        field.parentNode.insertBefore(picker.el, field);
    });
};
$("#dep").append(departure);

//put in separate function so variables are not universal
var land = function () {
    var field = document.getElementById("rtn");
    //pikaday from extrenal js libary
    var picker = new Pikaday({
        onSelect: function () {
            //date format determined by API documentation
            field.value = this.getMoment().format("YYYY-MM-DD");
        },
    });
    //pik-rtn id for label to close date picker and not open departure date picker
    var pickerOpen = false;
    $("#pikRtn").click(function () {
        pickerOpen ? picker.hide() : picker.show();
        pickerOpen = !pickerOpen;
    });
    //adds datepicker element to page when field is clicked
    $("#rtn").on("click", function () {
        field.parentNode.insertBefore(picker.el, field);
    });
};
$("#rtn").append(land);

// reset buttons
//use classes so same js can be used on hotels.html and flights.html
$(".clear").on("click", function () {
    $(".clearArea").empty();
});

//instructions and results
$(".results").hide();
$(".closeInstructions").click(function() {
    $(".instructions").hide()
    $(".results").show()
})
