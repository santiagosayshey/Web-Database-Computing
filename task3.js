let mCounter = 0;

function mcount() {
  var child = document.createElement("P");
  var parent = document.getElementById("mcount");
  if (mCounter === 0) {
    parent.appendChild(child);
  }
  mCounter++;
  child.innerText = mCounter;
}