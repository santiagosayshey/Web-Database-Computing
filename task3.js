let count = 0;
function counter() {
  count++;
  var div = document.getElementById("mcount");
  div.innerHTML = count;
}