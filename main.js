
document.addEventListener('DOMContentLoaded', () => {
    function createContainerElements(practice) {
        //make a <div class="dailyQuickies"> and give a class name "daily-quickies-contanier"
        let dailyQuickies = document.createElement("div");
        dailyQuickies.classList.add("daily-quickies-contanier");
        //create an element to hold the title and pull the title from json data 
        let h2 = document.createElement("h2");
        h2.textContent = practice.title;
        //create an element to hold img 
        let img = document.createElement("img");
        img.src = practice.image;
        img.classList.add("daily-quickies-images");
        //create an element to hold duration    
        let h5 = document.createElement("h5");
        h5.textContent = practice.duration;
        //create an element to hold description
        let p = document.createElement("p");
        p.classList.add('hide');
        p.textContent = practice.description;
        //adds button
        let button = document.createElement("button");
        button.textContent = "Start";
        button.addEventListener('click', () => p.classList.toggle('hide'))
        //create an element to hold facts
        //create title to quickies "Quickie Zone"
        dailyQuickies.append(h2, img, h5, p, button);
        document.getElementById("practicesList").appendChild(dailyQuickies);
    }

    fetch("http://localhost:3000/practices")
        .then(res => res.json())
        .then(practices => {
            //create a container for the practices ul
            const practiceList = document.querySelector("ul#practicesList");
            //loop through the practices (forEach meets 1 requirement)
            practices.forEach(practice => createContainerElements(practice));
        })

})


