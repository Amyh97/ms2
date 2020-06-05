$("#convert").click(function() {
    var amount = $("#amount").val();
var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		document.getElementById("conversion").innerHTML=this.responseText;
	}
});

xhr.open("GET", `https://currency-exchange.p.rapidapi.com/exchange?q=${amount}&from=GBP&to=CZK`);
xhr.setRequestHeader("x-rapidapi-host", "currency-exchange.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "5016226057msh752c3a66045bae2p13d849jsnd78e30e17efa");

xhr.send(data);

});