let mCounter = 0;
function mcount() {
  if (mCounter === 0) {
    var parent = document.getElementById("mcount");
    var child = document.createElement("P");
    child.innerText = mCounter;
    parent.appendChild(child);
  }
  mCounter++;
}