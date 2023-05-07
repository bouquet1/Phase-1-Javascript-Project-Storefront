//console.log("test"); -//works

function createContainerElements(practice){
    //make a <div class="container"> and a class name "contanier"
    let contanier = document.createElement("div");
    contanier.classList.add("contanier");
    //create an element to hold the title and pull the title from json data 
    let h2 = document.createElement("h2");
    h2.textContent = practice.name;
    //create an element to hold img - add photos to db.json image property I don't have url's yet
    let img = document.createElement("img");
    img.src = practice.image;
    //create an element to hold duration    
    let h5 = document.createElement("h5");
    h5.textContent = practice.duration;
    //create an element to hold description
    let h4 = document.createElement("h4");
    h4.textContent = practice.description;
    //create an element to hold facts
    let p= document.createElement("p");
    p.textContent = practice.facts;
    //create an element to hold facts
    contanier.append(h2, img, h4, h5, p);
    document.getElementById("practicesList").appendChild(contanier);
}

fetch("http://localhost:3000/practices")
    .then(res => res.json())
    //.then(json => console.log(json)) // works
    .then(practices => {
        //create a container for the practices ul
        const practiceList = document.querySelector("ul#practicesList");
        //console.log(practiceList); //works
        //loop through the practices (forEach meets 1 requirement)
        practices.forEach(practice => createContainerElements(practice)
            //TODO LIST - twe have itle, image, duration, description, facts to loop through
            //create an element to hold the title // h2 maybe
            //create an element to hold img - add photos to db.json image property
            //create an element to hold duration
            //create an element to hold description
            //create an element to hold facts
            //create <li> item to hold the elements
            //append elements to the list items
            //append list items to ul container
        )
    })

//document.addEventListener('DOMContentLoaded', init);
