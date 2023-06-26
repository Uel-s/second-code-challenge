// Fetch animal names from the server
function getAnimalNames(animals) {
    fetch(" http://localhost:3000/characters")
        .then(response => response.json())
        .then(animals => { 
            animals.forEach((animal)=> {    
            const animalCode = document.getElementById("animalcode");
            const li = document.createElement("li")
            animalCode.appendChild(li)
            const a = document.createElement("a")
            a.href=`http://localhost:3000/characters/${animal.id}`      //linking with local server
            li.appendChild(a)
            a.textContent=`${animal.name}`
            a.addEventListener("click", (e)=>{
              e.preventDefault()

                //selecting the image in id 

              const image = document.querySelector("#animalcode img");
              image.src = animal.image;
              image.alt = animal.name;
   
              //creating an element h4 and appending to animalcode

              const name = document.createElement("h4");
              name.textContent = animal.name;
              animalCode.appendChild(image)
               
             //the vote button for the number of votes   

              const p = document.querySelector("#animalcode p");    
              const votesButton= document.createElement("button")
              votesButton.textContent="Add Votes"
              votesButton.addEventListener("click", function(e){
                animal.votes++ 
                p.textContent = `votes: ${animal.votes}`

              })
              animalCode.appendChild(votesButton)  
              p.textContent = `votes: ${animal.votes}`
              animalCode.appendChild(p)

            })

        })})
          
        //await for my code before sending to web

         document.addEventListener('DOMContentLoaded', init); 
}

getAnimalNames() // callback







