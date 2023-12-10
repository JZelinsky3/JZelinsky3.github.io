const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const Recipe = require('./models/recipeModel');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect("mongodb+srv://jzelinsky18:nSzIkd4O4vtyOCo0@cluster0.0fwvmjy.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB..."))
    .catch(err => console.error("Could not connect to MongoDB...", err));

app.use(bodyParser.json());

app.get('/recipes', async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'path', 'to', 'your', 'recipes.html'));
});

document.addEventListener('DOMContentLoaded', () => {
    const breakfastButton = document.querySelector('.dropbtn');
    const dropContent = document.querySelector('.drop-content');

    breakfastButton.addEventListener('click', (event) => {
        dropContent.classList.toggle('show');
    });

    dropContent.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            const category = event.target.textContent.toLowerCase();
            fetchRecipesByCategory(category);
        }
    });
});

const fetchRecipesByCategory = async (category) => {
    try {
        const response = await fetch(`/recipes?category=${category}`);
        const recipes = await response.json();
        displayRecipes(recipes);
    } catch (error) {
        console.error('Error fetching recipes:', error);
    }
};

const displayRecipes = (recipes) => {
    const recipeContainer = document.getElementById('recipeContainer');
    recipeContainer.innerHTML = '';

    recipes.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.innerHTML = `
            <h2>${recipe.title}</h2>
            <img src="${recipe.image}" alt="${recipe.title}" style="width: 400px; height: 200px;">
            <p><strong>Description:</strong> ${recipe.description}</p>
            <p><strong>Author:</strong> ${recipe.author}</p>
            <p><strong>Difficulty:</strong> ${recipe.difficulty}</p>
            <p><strong>Cook Time:</strong> ${recipe.cookTime}</p>
        
            <h3>Ingredients</h3>
            <ul>${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}</ul>
        
            <h3>Instructions</h3>
            <ol>${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}</ol>
            <hr>`;

        recipeContainer.appendChild(recipeElement);
    });
};

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
