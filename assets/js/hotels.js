//API call
$("#searchHotel").on("click", function (event) {
    //preventDefault to stop refresh
    event.preventDefault();
    //credentials to populate URL for API
    var ci = $("#checkIn").val();
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
        document.getElementById("firstHotel").append(firstHotel.name + " costing around " + firstHotel.price);
        document.getElementById("secondHotel").append(secondHotel.name + " costing around " + secondHotel.price);
        document.getElementById("thirdHotel").append(thirdHotel.name + " costing around " + thirdHotel.price);
    });
});

//date pickers to populate URLs for API calls, work on all browsers unlike type=date

var stay = function () {
    //formats date, determined by API documentation
    var field = document.getElementById("checkIn");
    var picker = new Pikaday({
        minDate: new Date(),
        onSelect: function () {
            field.value = this.getMoment().format("YYYY-MM-DD");
        },
    });
    //pik-date id on label to close picker
    var pickerOpen = false;
    $("#pikDate").click(function () {
        pickerOpen ? picker.hide() : picker.show();
        pickerOpen = !pickerOpen;
    });
    //adds datepicker element to page when field is clicked
    $("#checkIn").on("click", function () {
        field.parentNode.insertBefore(picker.el, field.nextSibling);
    });
};
$("#checkIn").append(stay);
