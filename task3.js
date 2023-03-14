let count = 0;
function counter() {
  count++;
  var div = document.getElementById("mcount");
  div.innerHTML = count;
}

function post() {
  var time = new Date();
  var temp = document.getElementsByTagName("textarea");
  var content = temp[0].value;
  
}