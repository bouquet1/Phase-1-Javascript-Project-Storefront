
document.addEventListener('DOMContentLoaded', () => {
    function createContainerElements(practice) {
        //create a contanier div for practices, create title, h2, img, duration, description, button for practices, and append them to DOM.
        let dailyQuickies = document.createElement("div");
        dailyQuickies.classList.add("daily-quickies-contanier");
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
        //click event listener practices' buttons
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

//submit event listener weekly goal input

document.querySelector("#weeklyPlan").addEventListener("submit", (e) => {
    e.preventDefault();
    const numberOfDays = document.getElementById("number-of-days").value;
    console.log(numberOfDays);
})

const affirmations =document.getElementById("affirmations");
setTimeout(() => affirmations.show(), 3000);
document.getElementById("affirmationButton").addEventListener('click', (e) => affirmations.close())
