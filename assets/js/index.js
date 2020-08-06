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
