//console.log("test"); -//works

function createContainerElements(practice){
    //make a <div class="dailyQuickies"> and give a class name "daily-quickies-contanier"
    let dailyQuickies = document.createElement("div");
    dailyQuickies.classList.add("daily-quickies-contanier");
    //create an element to hold the title and pull the title from json data 
    let h2 = document.createElement("h2");
    h2.textContent = practice.title;
    //create an element to hold img - add photos to db.json image property I don't have url's yet
    let img = document.createElement("img");
    img.src = practice.image;
    img.classList.add("daily-quickies-images");
    //create an element to hold duration    
    let h5 = document.createElement("h5");
    h5.textContent = practice.duration;
    //create an element to hold description
    let p = document.createElement("h4");
    p.textContent = practice.description;
    //adds button
    let button= document.createElement("button");
    button.textContent = "Start";
    //create an element to hold facts
    //create title to quickies "Quickie Zone"
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
        practices.forEach(practice => createContainerElements(practice));
    })


    let introductionText = document.getElementById("introductionText");
    let p = document.createElement("p");
    p.textContent = "Welcome to MindBody Quickie, the ultimate destination for busy individuals who want to maintain a healthy mind and body connection. Our app features short, effective daily quickies that you can squeeze into your schedule, as well as longer practices in our <span>Zen Zone</span> for when you have more time to unwind.";
    //console.log(p)
    introductionText.append(p);
    
    let practiceFrequency = document.getElementById("practiceFrequency");
    // h4 = document.createElement("h4");
    practiceFrequency.textContent = "Set your goal and leave the rest to us! <span>Open motivational notifications to help me reach my goal</span>";
    // practiceFrequency.append(h4);

/*    <div id="inputGoalDays" class="input-goal-days">
    <form>
        <div>
            <label for="number-of-days">Type how many days per week would you like to practice? (1-7)
            </label>
            <input
                type="text"
                id="number-of-days"
                name="number-of-days"
                placeholder="number of days"
            />
        </div>
    </form>
    </div>
*/

//document.addEventListener('DOMContentLoaded', init);
