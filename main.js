
document.addEventListener('DOMContentLoaded', () => {
    function createContainerElements(practice) {
        //make a <div class="dailyQuickies"> and give a class name "daily-quickies-contanier"
        let dailyQuickies = document.createElement("div");
        dailyQuickies.classList.add("daily-quickies-contanier");
        //create an element to hold the title h2, img, duration, description, button and pull the title from json data 
        let h3 = document.createElement("h3");
        h3.textContent = practice.title;
        let img = document.createElement("img");
        img.src = practice.image;
        img.classList.add("daily-quickies-images");  
        let h5 = document.createElement("h5");
        h5.textContent = practice.duration;
        let p = document.createElement("p");
        p.classList.add('hide');
        p.textContent = practice.description;
        let button = document.createElement("button");
        button.textContent = "Start";
        button.addEventListener('click', () => p.classList.toggle('hide'))
        dailyQuickies.append(h3, img, h5, p, button);
        document.getElementById("practicesList").appendChild(dailyQuickies);
    }

    fetch("http://localhost:3000/practices")
        .then(res => res.json())
        .then(practices => {
            practices.forEach(practice => createContainerElements(practice));
        })

})


