var amount = $("#amount").val();

function convert() {

var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {

        document.getElementById("conversion").innerHTML = this.responseText;

    }

  };

xhr.open("GET",`https://data.fixer.io/api/convert?access_key=91128bf4c960f618dd6b08944dd449a1&from=GBP&to=CZK&amount=${amount}`);
xhr.send();
}