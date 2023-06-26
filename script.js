

// Fetch animal names from the server
function getAnimalNames(animals) {
    fetch(" http://localhost:3000/characters")
        .then(response => response.json())
        .then(animals => { 
            animals.forEach((animal)=> {
            const animalCode = document.getElementById("animalcode");
            //animalCode.innerHTML = `<li class="animaldetails"></li>`; // Clear the existing list
            const li = document.createElement("li")
            animalCode.appendChild(li)
            const a = document.createElement("a")
            a.href=`http://localhost:3000/characters/${animal.id}`
            li.appendChild(a)
            a.textContent=`${animal.name}`
            a.addEventListener("click", (e)=>{
              e.preventDefault()
              const image = document.querySelector("#animalcode img");
              image.src = animal.image;
              image.alt = animal.name;

              const name = document.createElement("h4");
              name.textContent = animal.name;
              animalCode.appendChild(image)
               
              const p = document.querySelector("#animalcode p");
              p.textContent = `votes: ${animal.votes}`
              animalCode.appendChild(p)

        
              


            })

        })})
}


            // function animalVote (){
                //  getAnimalNames()}
            

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







