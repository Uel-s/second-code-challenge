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
            a.href=`http://localhost:3000/characters`      //linking with local server 
            li.appendChild(a) 
            a.textContent=`${animal.name},${animal.id}`
            a.addEventListener("click", (e)=>{
              e.preventDefault()

                //selecting the image in id 

              const image = document.querySelector("#animalcode img");
              image.src = animal.image;
              image.alt = animal.name;
              animalCode.appendChild(image)
   
              //creating an element h4 and appending to animalcode

              const header = document.createElement("h4");
              header.textContent = animal.name;


              
               
             //the vote button for the number of votes   

              const paragraph = document.querySelector("#animalcode p");    
              const votesButton= document.createElement("button")
              votesButton.textContent="Add Votes"
              votesButton.addEventListener("click", ()=> {
    
                 animal.votes++ 
                paragraph.textContent = `votes: ${animal.votes}`

              })
              animalCode.appendChild(votesButton)  
  
              animalCode.appendChild(paragraph)

            })

        })})
          
        //await for my code before sending to web

        document.addEventListener('DOMContentLoaded', sam); 
      }

getAnimalNames() // callback








