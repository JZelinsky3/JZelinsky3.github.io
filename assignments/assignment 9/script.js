const slide = () => {
    const currentQuote = document.querySelector("#slide :not(.hid)");
    currentQuote.classList.add("hid");

    let nextQuote = currentQuote.nextElementSibling;

    if (nextQuote == null) {
        nextQuote = document.querySelector("#slide :first-child");
    }

    nextQuote.classList.remove("hid");
};

const colors = ["red", "orange", "yellow", "green", "blue", "purple"];

const showRainbow = () => {
    let result = document.getElementById("result");
    result.innerHTML = "";

    const addColorLine = (color) => {
        const colorLine = document.createElement("p");
        colorLine.classList.add("color-line");
        colorLine.style.backgroundColor = color;
        colorLine.style.color = color;
        colorLine.textContent = "hide";
        result.appendChild(colorLine);
    };

    const gold = document.querySelector("#gold");

    colors.forEach((color, index) => {
        setTimeout(() => {
            addColorLine(color);
            if (index === colors.length - 1) {
                gold.classList.remove("hid");
            }
        }, index * 250);
    });
};

window.onload = () => {
    setInterval(slide, 2000);
    document.getElementById("draw").onclick = showRainbow;
};