$("#search").click(function() {
var dateOut = $("#dateOut").val();
var dateIn = $("#dateIn").val();
var dep = $("#dep").val();
var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
        console.log(this.responseText);
	}
});

xhr.open("GET", `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/UK/GBP/en/LHR-sky/BUD-sky/${dateOut}?inboundpartialdate=${dateIn}`);
xhr.setRequestHeader("x-rapidapi-host", "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "5016226057msh752c3a66045bae2p13d849jsnd78e30e17efa");

xhr.send(data);
})