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

// date pickers from Pikaday as type=date does not work on all browsers
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
