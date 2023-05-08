//console.log("test"); -//works

function createContainerElements(practice){
    //make a <div class="dailyQuickies"> and a class name "daily-quickies-contanier"
    let dailyQuickies = document.createElement("div");
    dailyQuickies.classList.add("daily-quickies-contanier");
    //create an element to hold the title and pull the title from json data 
    let h2 = document.createElement("h2");
    h2.textContent = practice.title;
    //create an element to hold img - add photos to db.json image property I don't have url's yet
    let img = document.createElement("img");
    img.src = practice.image;
    //create an element to hold duration    
    let h5 = document.createElement("h5");
    h5.textContent = practice.duration;
    //create an element to hold description
    let p = document.createElement("h4");
    p.textContent = practice.description;
    //adds button
    let button= document.createElement("button");
    button.textContent = "Let's Star!";
    //create an element to hold facts
    dailyQuickies.append(h2, img, h5, p, button);
    document.getElementById("practicesList").appendChild(dailyQuickies);
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


    let introductionText = document.getElementById("introductionText");
    let p = document.createElement("p");
    p.textContent = "Welcome to MindBody Quickie, the ultimate destination for busy individuals who want to maintain a healthy mind and body. Our app features short, effective daily quickies that you can squeeze into your schedule, as well as longer practices in our Zen Zone for when you have more time to unwind.";
    //console.log(p)
    introductionText.append(p);
    
    

//document.addEventListener('DOMContentLoaded', init);
