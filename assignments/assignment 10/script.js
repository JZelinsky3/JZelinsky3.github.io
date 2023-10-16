class Toy {
    constructor(name, price, ages, rating, img) {
        this.name = name;
        this.price = price;
        this.ages = ages;
        this.rating = rating;
        this.img = img;
    }
    
    getDetails() {
        return `${this.name}<br><strong>Price:</strong> ${this.price}<br><strong>Age Range:</strong> ${this.ages}<br><strong>Rating:</strong> ${this.rating}`;
    }
    
    getToyItem() {
        return {
            name: this.name,
            price: this.price,
            ages: this.ages,
            rating: this.rating,
            img: this.img
        };
    }
}

const toys = [
    new Toy('Car', '$27.99', '3-9 years', '4 stars', 'car.png'),
    new Toy('Dinosaur', '$19.99', '2-10 years', '5 stars', 'dino.png'),
    new Toy('Fish', '$14.99', '2-7 years', '2 stars', 'fish.png'),
    new Toy('Panda', '$34.99', '4-12 years', '3 stars', 'panda.png'),
    new Toy('Pig', '$9.99', '5-8 years', '3 stars', 'pig.png'),
    new Toy('Woody', '$19.99', '5-12 years', '4 stars', 'woody.png')
];

const container = document.getElementById('toy-container');

function createToyElement(toy) {
    const toyDiv = document.createElement('div');
    toyDiv.className = 'toy';
    const img = document.createElement('img');
    img.src = `pics/${toy.img}`;
    const detailsDiv = document.createElement('div');
    detailsDiv.className = 'toy-info';
    detailsDiv.innerHTML = toy.getDetails();
    toyDiv.appendChild(img);
    toyDiv.appendChild(detailsDiv);
    return toyDiv;
}

function displayToys(toys) {
    toys.forEach(toy => {
        const toyElement = createToyElement(toy);
        container.appendChild(toyElement);
    });
}

displayToys(toys);