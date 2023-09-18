var moving = 0
const animate = () => {

  if (moving > 0) {
    document.getElementById("icon").classList.remove("animate");
    moving = 0
  } else {
    document.getElementById("icon").classList.add("animate");
    moving = 1
   }
}


function elementFromHtml(html) {
  console.log(html);
  const template = document.createElement("template");
  template.innerHTML = html.trim();
  return template.content.firstElementChild;
}

const displayText = () => {
  const productName = document.getElementById("product-name").value;
  const comment = document.getElementById("comment").value;
  const rating = document.getElementById("rating").value;
  const username = document.getElementById("username").value;
  html = '<section class="toutput"> <h3>'+ productName +'</h3> <p>'+ rating + '/5 stars ' + comment + '</p><p>' + username +'by </p></section>'
  html = elementFromHtml(html);
  document.getElementById("responses").appendChild(html);
}

const showImg = () => {
  document.getElementById("img").classList.remove("hide");
}
const hideImg = () => {
  document.getElementById("img").classList.add("hide");
}

window.onload = () => {
  document.getElementById("animate-button").onclick = animate;
  document.getElementById("add-comment").onclick = displayText;
  document.getElementById("hide").onclick = hideImg;
  document.getElementById("show").onclick = showImg;
}

var id = null;
function myMove() {
  var elem = document.getElementById("myAnimation");   
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + 'px'; 
      elem.style.left = pos + 'px'; 
    }
  }
}