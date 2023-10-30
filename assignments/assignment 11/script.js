document.addEventListener("DOMContentLoaded", () => {
    const movBox = document.getElementById("mov-box");

    async function fetchData() {
        try {
            const response = await fetch(
                "https://portiaportia.github.io/json/movies.json"
            );
            const data = await response.json();

            data.forEach((mov) => {
                const movCol = document.createElement("div");
                movCol.classList.add("mov-col");

                const img = document.createElement("img");
                img.src = `https://portiaportia.github.io/json/${mov.img}`;
                img.alt = mov.title;
                img.classList.add("mov-img");

                const title = document.createElement("div");
                title.classList.add("mov-title");
                title.textContent = mov.title;

                const details = document.createElement("div");
                details.classList.add("details");
                const actors = mov.actors.join(", ");
                details.innerHTML = `<p><strong>Director:</strong> ${mov.director}</p>
                                     <p><strong>Year:</strong> ${mov.year}</p>
                                     <p><strong>Actors:</strong> <span class="actors">${actors}</span></p>
                                     <p><strong>Genres:</strong> ${mov.genres.join(", ")}</p>
                                     <p><strong>Description:</strong> ${mov.description}</p>`;

                movCol.appendChild(img);
                movCol.appendChild(title);
                movCol.appendChild(details);

                movBox.appendChild(movCol);
            });
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    }

    fetchData();
});