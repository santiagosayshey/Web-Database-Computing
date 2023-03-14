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

  var post_time = document.createElement('p');
  post_time.className = "post_time";
  post_time.innerText = time;

  var post_content = document.createElement('p');
  post_content.className = "post_content";
  post_content.innerText = content;

  var parent = document.getElementById('posts');
  parent.appendChild(post_time);
  parent.appendChild(post_content);

}