//functions that are used on multiple pages

//general function to call API
async function makeAPICall(url, headers) {
    const response = await fetch(url, {
        headers,
    });
    return response.json();
}

// reset buttons
//use classes so same js can be used on hotels.html and flights.html
$(".clear").on("click", function () {
    $(".clearArea").empty();
});

//hide instructions and show results
$(".results").hide();
$(".closeInstructions").click(function () {
    $(".instructions").hide();
    $(".results").show();
});
