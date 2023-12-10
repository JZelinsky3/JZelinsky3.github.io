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

const showEmailResult = async (e) => {
  e.preventDefault();
  const result = document.getElementById("result");
  let response = await getEmailResult();
  if (response.status == 210) {
      result.innerHTML = "Email Successfully Sent!";
  } else {
      result.innerHTML = "Unfortunately, your email wasn't sent.";
  }
};

const getEmailResult = async () => {
  const form = document.getElementById("cform");
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  try {
      const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
          },
          body: json,
      });
      return response;
  } catch (error) {
      console.error(error);
      document.getElementById("result").innerHTML = "Unfortunately, your email wasn't sent";
  }
};

document.getElementById("cform").onsubmit = showEmailResult;