fetch('recipes.json')
    .then(response => response.json())
    .then(data => {
        const recipeContainer = document.getElementById('recipeContainer');
        data.recipes.forEach(recipe => {
            const recipeElement = document.createElement('div');
            recipeElement.innerHTML = `
                <h2>${recipe.title}</h2>
                <img src="${recipe.image}" alt="${recipe.title}" style="width: 300px; height: 200px;">
                <p><strong>Description:</strong> ${recipe.description}</p>
                <p><strong>Author:</strong> ${recipe.author}</p>
                <p><strong>Difficulty:</strong> ${recipe.difficulty}</p>
                <p><strong>Cook Time:</strong> ${recipe.cookTime}</p>
                <h3>Ingredients</h3>
                <ul>${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}</ul>
                <h3>Instructions</h3>
                <ol>${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}</ol>
                <hr>
            `;
            recipeContainer.appendChild(recipeElement);
        });
    })
    .catch(error => console.error("ERROR, couldn't fetch data: ", error));