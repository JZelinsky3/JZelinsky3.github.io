const hamburgerMenu = document.querySelector('.hamburger-menu');
const mainNav = document.getElementById('mainNav');

hamburgerMenu.addEventListener('click', () => {
    mainNav.classList.toggle('show');
});

const displayText = () => {
    const productName = document.getElementById("product-name").value;
    html = '<section class="toutput"> <h3>'+ productName +'</h3>'
    html = elementFromHtml(html);
    document.getElementById("responses").appendChild(html);
  }

  const displayText2 = () => {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    html = '<section class="toutput"><h3>'+ username +'</h3> <p>' + email +'</p> </section>'
    html = elementFromHtml(html);
    document.getElementById("responses").appendChild(html);
  }

  window.onload = () => {
    document.getElementById("submit").onclick = displayText;
  }