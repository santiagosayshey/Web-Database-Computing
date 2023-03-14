let count = 0;
function counter(parent) {
  count++;
  parent.innerHTML = count;
}


let totalPosts = 0;
function post() {
  var time = new Date();
  var temp = document.getElementsByTagName("textarea");
  var content = temp[0].value;

  var post_time = document.createElement('p');
  var post_content = document.createElement('p');
  var parent = document.getElementById('posts');

  post_time.className = "post_time";
  post_time.innerText = time;

  post_content.className = "post_content";
  post_content.innerText = content;

  var color = document.getElementsByName("color");
  for (let i = 0; i < color.length; i++) {
    if (color[i].checked) {
      post_content.style.color = color[i].value;
    }
  }

  var style = document.getElementsByName("style");
  for (let i = 0; i < style.length; i++) {
    if (style[i].checked) {
      if (style[i].value == "bold")
        post_content.style.fontWeight = style[i].value;
      if (style[i].value == "italic")
        post_content.style.fontStyle = style[i].value;
    }
  }
  var dropDown = document.getElementById("dropdown");
  var newOption = document.createElement("option");

  var numPosts = Number(document.getElementsByName("quantity")[0].value);

  for (let j = 0; j < numPosts; j++) {
    parent.appendChild(post_time.cloneNode(true));
    parent.appendChild(post_content.cloneNode(true));
    newOption.disabled = false;
    newOption.selected = false;
    newOption.innerText = totalPosts + j + 1;
    dropDown.add(newOption.cloneNode(true));
  }
  totalPosts += numPosts;
}

function hideMain() {
  var main = document.getElementById("main");
  var menu = document.getElementById("menu");

  main.style.display = "none";
  menu.style.display = "block";
}

function hideMenu() {
  var main = document.getElementById("main");
  var menu = document.getElementById("menu");

  main.style.display = "block";
  menu.style.display = "none";
}

function colorBG(parent) {
  document.body.style.backgroundColor = parent.value;
}

function showPosts(numPosts) {
  var parent = document.getElementById('posts');
  for (let i = 0; i < 2 * numPosts; i++) {
    parent.children[i].style.display = "block";
  }
  for (let i = 2 * numPosts; i < 2 * totalPosts; i++) {
    parent.children[i].style.display = "none";
  }

}