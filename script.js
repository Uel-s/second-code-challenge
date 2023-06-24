
// The API address
const animalAddress = "http://localhost:3000";

// Fetch animal names from the server
function getAnimalNames() {
    fetch(`${animalAddress}/characters`)
        .then(response => response.json())
        .then(data => {
            const animalCode = document.getElementById("animalcode");
            animalCode.innerHTML = ""; // Clear the existing list

            data.characters.forEach(animal => {
                const animalItem = document.createElement("li");
                animalItem.className = "animaldetails";

                const image = document.createElement("img");
                image.src = animal.image;
                image.alt = animal.name;

                const name = document.createElement("h4");
                name.textContent = animal.name;

                animalItem.appendChild(image);
                animalItem.appendChild(name);

                animalCode.appendChild(animalItem);

                // Add click event listener to vote for an animal
                animalItem.addEventListener("click", () => {
                    voteForAnimal(animal.id);
                });
            });
        })
        .catch(error => {
            console.error("Error getting animal names:", error);
        });
}

// Vote for an animal by sending a request to the server
function voteForAnimal(animalId) {
    fetch(`${animalAddress}/characters/${animalId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ vote: true })
    })
        .then(response => response.json())
        .then(data => {
            // Update the vote count for the animal
            const animalItem = document.querySelector(`li.animaldetails img[alt="${data.name}"]`).parentNode;
            const voteCount = document.createElement("p");
            voteCount.textContent = `Votes: ${data.votes}`;
            animalItem.appendChild(voteCount);
        })
        .catch(error => {
            console.error("Error voting for animal:", error);
        });
}

// Initialize the app
function init() {
    getAnimalNames();
}

// Invoke the app initialization
init();







