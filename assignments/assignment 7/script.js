// Show Exercise 1 content and hide Exercise 2
ex1Button.classList.add("active");
ex2Content.style.display = "none";

ex1Button.onclick = function () {
    ex1Content.style.display = "block";
    ex2Content.style.display = "none";
    ex1Button.classList.add("active");
    ex2Button.classList.remove("active");
    fund.style.display = "none";
};

ex2Button.onclick = function () {
    ex1Content.style.display = "none";
    ex2Content.style.display = "block";
    ex1Button.classList.remove("active");
    ex2Button.classList.add("active");
    fund.style.display = "block";
};

const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav ul");
const ex1Content = document.getElementById("ex1-content");
const ex2Content = document.getElementById("ex2-content");
const ex1Button = document.getElementById("ex1");
const ex2Button = document.getElementById("ex2");
const donationAmountInput = document.getElementById("donationAmount");
const fundRaising = document.getElementById("fundRaising");
const progress = document.getElementById("progress");
const result1 = document.getElementById("result1");

menuToggle.onclick = function () {
    menuToggle.classList.toggle("active");
    nav.classList.toggle("active");
};

nav.onclick = function (event) {
    if (event.target.tagName === "LI") {
        menuToggle.classList.remove("active");
        nav.classList.remove("active");
    }
};

// Oldest person
const oldestButton = document.getElementById("oldest");
oldestButton.onclick = function () {
    const name1 = document.getElementById("name1").value;
    const age1 = parseFloat(document.getElementById("age1").value);
    const name2 = document.getElementById("name2").value;
    const age2 = parseFloat(document.getElementById("age2").value);
    const name3 = document.getElementById("name3").value;
    const age3 = parseFloat(document.getElementById("age3").value);

    if (!name1 || isNaN(age1) || !name2 || isNaN(age2) || !name3 || isNaN(age3)) {
        result1.textContent = "Please enter valid information for all three persons.";
    } else {
        const people = [
            { name: name1, age: age1 },
            { name: name2, age: age2 },
            { name: name3, age: age3 }
        ];

        people.sort((a, b) => b.age - a.age);

        const sortedNames = people.map(person => person.name).join(", ");
        result1.textContent = `Oldest to youngest: ${sortedNames}`;
    }
};

// The fund raising meter
const updateThermometerButton = document.getElementById("updateThermometer");
updateThermometerButton.onclick = function () {
    const donationAmount = parseFloat(donationAmountInput.value);
    if (!isNaN(donationAmount)) {
        const goal = 10000;
        const percentage = Math.min(100, (donationAmount / goal) * 100);
        progress.style.width = percentage + "%";
    }
};