
document.addEventListener('DOMContentLoaded', () => {
    function createContainerElements(practice) {
        //create a container div for practices, create title, h2, img, duration, description, button for practices, and append them to DOM.
        let dailyQuickies = document.createElement("div");
        dailyQuickies.classList.add("daily-quickies-container");
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
        button.classList.add('quickie-button');
        button.textContent = `What is ${practice.name}`;
        button.addEventListener('click', () => p.classList.toggle('hide'));
        // button2.addEventListener('click', () => p.classList.toggle('hide'));
        dailyQuickies.append(h3, img, h5, p, button,);
        document.getElementById("practicesList").appendChild(dailyQuickies);
    }

    fetch("http://localhost:3000/practices")
        .then(res => res.json())
        .then(practices => {
            practices.forEach(practice => createContainerElements(practice));
        })

})
const displayDays = document.querySelector("#displayDays");
//submit event listener weekly goal input
document.querySelector("#weeklyPlan").addEventListener("submit", (e) => {
    e.preventDefault();
    let submitButton = document.createElement("input")
    submitButton.type = "submit"
    //deneme
    // submitButton.setAttribute('id', 'submitButton')
    // submitButton.addEventListener('click', (e) => {
    //     document.getElementById('submitButton').style.display = 'block';
    //     this.style.display = 'none';
    // })
    submitButton.addEventListener('click', () => p.classList.toggle('hide'));
    //deneme
    const numberOfDays = document.getElementById("number-of-days").value;
    for(let i=0; i < numberOfDays; i++){
        //make d-down boxes === number of days
        const selectActivity = document.createElement("select");
        const chooseOption = document.createElement("option")
        chooseOption.textContent = "Choose Practice"
        const yoga = document.createElement("option")
        yoga.textContent = "Yoga"
        const meditation = document.createElement("option")
        meditation.textContent = "Meditation"
        const stretch = document.createElement("option")
        stretch.textContent = "Stretch"
        const breathe = document.createElement("option")
        breathe.textContent = "Breathe"
        const warmUp = document.createElement("option")
        warmUp.textContent = "Warm Up"
        const pilates = document.createElement("option")
        pilates.textContent = "Pilates"

        selectActivity.append(chooseOption, yoga, meditation, stretch, breathe, warmUp, pilates);
        displayDays.append(selectActivity)
    }
    displayDays.append(submitButton)
    displayDays.addEventListener('submit', handleDisplayDay)
    //submitOneTime(e)
})

//QESTION I can submit infinitely. It adds more d-down+new submit button for each input submit.
//Trying to make a fucntion to make user submit #no of days only one time
// function submitOneTime (e) {
//     const allowSubmit = true;
//     e.onsubmit = function () {
//         if(allowSubmit)
//             allowSubmit = false;
//         else
//             return false;
//     } 
// }
//deneme kodu sonu

//try another option //used var cuz I don't know which scope should I add this fucntion so I used var to access everywhere in global scope 
// document.observe("DOMContentLoaded", () => {
//     var btn;
//     btn = $('submitButton');
//     btn.observe('click', () => this.disabled = true)
// });


// breakroom help, continue on this code 
//     if(displayDays[0]){
//         if(e.target[0] === displayDays[displayDays.length-1])return;
//         console.log(e.target[0].value)
//     }

function handleDisplayDay(e){
    e.preventDefault()
    const practiceContainer = document.querySelector('#practiceContainer')
    if(displayDays[0]){ 
        if(e.target[0] === displayDays[displayDays.length-1])return;
        const dayOneCard = document.createElement("div")
        //const dayOnePractice = document.createElement('p')
        //dayOnePractice.textContent = e.target[0].value
        const dayOne = document.createElement('p')
        //dayOne.textContent = 'Day 1'
        //const dayNumber = dayOne.textContent
        dayOneCard.textContent = `${dayOne.textContent = "Day 1"}: ${e.target[0].value}`;
        practiceContainer.append(dayOneCard)
    }
    if(displayDays[1]){
        if(e.target[1] === displayDays[displayDays.length-1])return;
        const dayTwoCard = document.createElement("div")
        const dayTwo = document.createElement('p')
        dayTwoCard.textContent = `${dayTwo.textContent = "Day 2"}: ${e.target[1].value}`;
        practiceContainer.append(dayTwoCard)
    }
    if(displayDays[2]){
        if(e.target[2] === displayDays[displayDays.length-1])return;
        const dayThreeCard = document.createElement("div")
        const dayThree = document.createElement("p")
        dayThreeCard.textContent = `${dayThree.textContent = "Day 3"}: ${e.target[2].value}`
        practiceContainer.append(dayThreeCard)
    }
    if(displayDays[3]){
        if(e.target[3] === displayDays[displayDays.length-1])return;
        const dayFourCard = document.createElement("div")
        const dayFour = document.createElement("p")
        dayFourCard.textContent = `${dayFour.textContent = "Day 4"}: ${e.target[3].value}`
        practiceContainer.append(dayFourCard)
    }
    if(displayDays[4]){
        if(e.target[4] === displayDays[displayDays.length-1])return;
        const dayFiveCard = document.createElement("div")
        const dayFive = document.createElement("p")
        dayFiveCard.textContent = `${dayFive.textContent = "Day 5"}: ${e.target[4].value}`
        practiceContainer.append(dayFiveCard)
    }
    if(displayDays[5]){
        if(e.target[5] === displayDays[displayDays.length-1])return;
        const daySixCard = document.createElement("div")
        const daySix = document.createElement("p")
        daySixCard.textContent = `${daySix.textContent = "Day 6"}: ${e.target[5].value}`
        practiceContainer.append(daySixCard)
    }
    if(displayDays[6]){
        if(e.target[6] === displayDays[displayDays.length-1])return;
        const daySevenCard = document.createElement("div")
        const daySeven = document.createElement("p")
        daySevenCard.textContent = `${daySeven.textContent = "Day 4"}: ${e.target[6].value}`
        practiceContainer.append(daySevenCard)
    }
 }

 const displayDuration = document.querySelector("#displayDuration");
 //submit event listener duration input

//QUESTION When I apply css on it, I can't close the modal box. I couldn't put it in the middle of the screen as a second layer. 

//manipulates affirmations box
// const quotes = document.getElementById("quotes");
// setTimeout(() => quotes.show(), 3000);
// document.getElementById("quotesButton").addEventListener("click", (e) => quotes.close())

