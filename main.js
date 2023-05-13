
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
})


function handleDisplayDay(e){
    e.preventDefault()
    const practiceContainer = document.querySelector('#practiceContainer')
    e.target.lastChild.disabled = "true"
    if(displayDays[0]){ 
        if(e.target[0] === displayDays[displayDays.length-1])return;
        const dayOneCard = document.createElement("div")
        dayOneCard.textContent = `Day 1 Practice: ${e.target[0].value}`;
        practiceContainer.append(dayOneCard)
    }
    if(displayDays[1]){
        if(e.target[1] === displayDays[displayDays.length-1])return;
        const dayTwoCard = document.createElement("div")
        dayTwoCard.textContent = `Day 2 Practice: ${e.target[1].value}`;
        practiceContainer.append(dayTwoCard)
    }
    if(displayDays[2]){
        if(e.target[2] === displayDays[displayDays.length-1])return;
        const dayThreeCard = document.createElement("div")
        dayThreeCard.textContent = `Day 3 Practice: ${e.target[2].value}`
        practiceContainer.append(dayThreeCard)
    }
    if(displayDays[3]){
        if(e.target[3] === displayDays[displayDays.length-1])return;
        const dayFourCard = document.createElement("div")
        dayFourCard.textContent = `Day 4 Practice: ${e.target[3].value}`
        practiceContainer.append(dayFourCard)
    }
    if(displayDays[4]){
        if(e.target[4] === displayDays[displayDays.length-1])return;
        const dayFiveCard = document.createElement("div")
        dayFiveCard.textContent = `Day 5 Practice: ${e.target[4].value}`
        practiceContainer.append(dayFiveCard)
    }
    if(displayDays[5]){
        if(e.target[5] === displayDays[displayDays.length-1])return;
        const daySixCard = document.createElement("div")
        daySixCard.textContent = `Day 6 Practice: ${e.target[5].value}`
        practiceContainer.append(daySixCard)
    }
    if(displayDays[6]){
        if(e.target[6] === displayDays[displayDays.length-1])return;
        const daySevenCard = document.createElement("div")
        daySevenCard.textContent = `Day 7 Practice: ${e.target[6].value}`
        practiceContainer.append(daySevenCard)
    }
 }


const displayDuration = document.querySelector("#displayDuration");
 //submit event listener duration input
 document.querySelector("#weeklyPlan").addEventListener("submit", (e) => {
    e.preventDefault();
    let submitButton = document.createElement("input")
    submitButton.type = "submit"
    const practiceDuration = document.getElementById("number-of-days").value;
    for(let i=0; i < practiceDuration; i++){
        const selectDuration = document.createElement("select");
        const chooseDuration = document.createElement("option")
        chooseDuration.textContent = "Choose Duration"
        const fiveToTenMinutes = document.createElement("option")
        fiveToTenMinutes.textContent = "5-10 minutes"
        const tenToFifteenMinutes = document.createElement("option")
        tenToFifteenMinutes.textContent = "10-15 minutes"
        const fifteenToTwentyMinutes = document.createElement("option")
        fifteenToTwentyMinutes.textContent = "15-20 minutes"

        selectDuration.append(chooseDuration, fiveToTenMinutes, tenToFifteenMinutes, fifteenToTwentyMinutes);
        displayDuration.append(selectDuration)
    }
    displayDuration.append(submitButton)
    displayDuration.addEventListener('submit', handleDisplayDuration)
 })

 function handleDisplayDuration(e){
    e.preventDefault()
    const durationContainer = document.querySelector('#durationContainer')
    e.target.lastChild.disabled = "true"
    if(displayDuration[0]){ 
        if(e.target[0] === displayDuration[displayDuration.length-1])return;
        const dayOneCard = document.createElement("div")
        dayOneCard.textContent = `Day 1 Practice Duration: ${e.target[0].value}`;
        durationContainer.append(dayOneCard)
    }
    if(displayDuration[1]){ 
        if(e.target[1] === displayDuration[displayDuration.length-1])return;
        const dayTwoCard = document.createElement("div")
        dayTwoCard.textContent = `Day 2 Practice Duration: ${e.target[1].value}`;
        durationContainer.append(dayTwoCard)
    }
    if(displayDuration[2]){ 
        if(e.target[2] === displayDuration[displayDuration.length-1])return;
        const dayThreeCard = document.createElement("div")
        dayThreeCard.textContent = `Day 3 Practice Duration: ${e.target[2].value}`;
        durationContainer.append(dayThreeCard)
    }
    if(displayDuration[3]){ 
        if(e.target[3] === displayDuration[displayDuration.length-1])return;
        const dayFourCard = document.createElement("div")
        dayFourCard.textContent = `Day 4 Practice Duration: ${e.target[3].value}`;
        durationContainer.append(dayFourCard)
    }
    // if(displayDuration[4]){ 
    //     if(e.target[4] === displayDuration[displayDuration.length-1])return;
    //     const dayFiveCard = document.createElement("div")
    //     dayFiveCard.textContent = `Day 5 Practice Duration: ${e.target[4].value}`;
    //     durationContainer.append(dayFiveCard)
    }
    if(displayDuration[5]){ 
        if(e.target[5] === displayDuration[displayDuration.length-1])return;
        const daySixCard = document.createElement("div")
        daySixCard.textContent = `Day 6 Practice Duration: ${e.target[5].value}`;
        durationContainer.append(daySixCard)
    }
    if(displayDuration[6]){ 
        if(e.target[6] === displayDuration[displayDuration.length-1])return;
        const daySevenCard = document.createElement("div")
        daySevenCard.textContent = `Day 7 Practice Duration: ${e.target[6].value}`;
        durationContainer.append(daySevenCard)
    }
 }

//manipulates quotes box
const quotes = document.getElementById("quotes");
setTimeout(() => quotes.show(), 1000);
document.getElementById("quotesButton").addEventListener("click", (e) => quotes.close())

