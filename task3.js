let mCounter = 0;
function mcount() {
  var parent = document.getElementById("mcount");
  var child = document.createElement("P");
  if (mCounter === 0) {
    parent.appendChild(child);
  }
  mCounter++;
  child.innerText = mCounter;
}