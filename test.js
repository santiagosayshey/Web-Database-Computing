/* 1. Create new AJAX request */
var xhttp = new XMLHttpRequest();
/* 4. Handle response (callback function) */
xhttp.onreadystatechange = function() {
 if (this.readyState == 4 && this.status == 200) {
 console.log(this.responseText);
 }
};
/* 2. Open connection */
xhttp.open("GET", "/request/uri", true);
/* 3. Send request */
xhttp.send();