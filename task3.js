let mCounter = 0;
function mcount() {
  mCounter++;
  var parent = document.getElementById("mcount");
  var child = document.createElement("P");
  child.innerText = mCounter;
  parent.appendChild(child);
}