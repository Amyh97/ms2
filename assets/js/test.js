async function makeAPICall(url, headers) {
    const response = await fetch(url, {
        headers,
    });
    return response.json();
}

$("#fly").on("click", function (event) {
    //preventDefault to stop refresh
    event.preventDefault();
    //departure and return dates and chosen airport
    var dep = $("#dep").val();
    var rtn = $("#rtn").val();
    var airport = $("#airport").val();

    searchID = makeAPICall(`https://compare-flight-prices.p.rapidapi.com/GetPricesAPI/StartFlightSearch.aspx?date2=${dep}2F27&islive=true&lapinfant=0&child=0&city2=PRG&date1=${rtn}2F24&youth=0&flightType=1&adults=1&cabin=1&infant=0&city1=${airport}&seniors=0`, {
        "x-rapidapi-host": "compare-flight-prices.p.rapidapi.com",
        "x-rapidapi-key": "8e454c9b0dmshf8a12541aa166abp100ea0jsnb6ef553fc5b2",
    });
    searchID.then((value) => {
        console.log(searchID)
    });
    data = makeAPICall(`https://compare-flight-prices.p.rapidapi.com/GetPricesAPI/GetPrices.aspx?SearchID=${searchID}`, {
        "x-rapidapi-host": "compare-flight-prices.p.rapidapi.com",
        "x-rapidapi-key": "8e454c9b0dmshf8a12541aa166abp100ea0jsnb6ef553fc5b2",
    });
    data.then((value) => {
        console.log(data)
    })
});





















var departure = function() {

var field = document.getElementById('dep');
var picker = new Pikaday({
onSelect: function() {
    field.value = this.getMoment().format('YYYY/MM/DD');
    }
});
var pickerOpen = false;
$("#dep").click(function () {
    pickerOpen ? picker.hide() : picker.show();
    pickerOpen = !pickerOpen;
});
//adds datepicker element to page when field is clicked
$("#dep").on("click",function() {
field.parentNode.insertBefore(picker.el, field)});
}
$("#dep").append(departure);

//put in separate function so variables are not universal
var land = function() {
var field = document.getElementById('rtn');
//pikaday from extrenal js libary 
var picker = new Pikaday({
onSelect: function() {
    field.value = this.getMoment().format('YYYY/MM/DD');
    }
});
var pickerOpen = false;
$("#rtn").click(function () {
    pickerOpen ? picker.hide() : picker.show();
    pickerOpen = !pickerOpen;
});
//adds datepicker element to page when field is clicked
$("#rtn").on("click",function() {
field.parentNode.insertBefore(picker.el, field)});
}
$("#rtn").append(land);
