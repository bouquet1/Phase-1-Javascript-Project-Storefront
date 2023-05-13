
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

// function handleDisplayDay(e){
//     e.preventDefault()
//     const practiceContainer = document.querySelector('#practiceContainer')
//     if(displayDays[0]){ 
//         if(e.target[0] === displayDays[displayDays.length-1])return;
//         const dayOneCard = document.createElement("div")
//         const dayOnePractice = document.createElement('p')
//         const dayOne = document.createElement('h1')
//         dayOne.textContent = 'Day 1:'
//         dayOnePractice.textContent = e.target[0].value
//         dayOneCard.append(dayOne, dayOnePractice)
//         practiceContainer.append(dayOneCard)
//     }
//     if(displayDays[1]){
//         if(e.target[1] === displayDays[displayDays.length-1])return;
//         console.log(e.target[1].value)
//     }
//     if(displayDays[2]){
//         if(e.target[2] === displayDays[displayDays.length-1])return;
//         console.log(e.target[2].value)
//     }
//     if(displayDays[3]){
//         if(e.target[3] === displayDays[displayDays.length-1])return;
//         console.log(e.target[3].value)
//     }
//     if(displayDays[4]){
//         if(e.target[4] === displayDays[displayDays.length-1])return;
//         console.log(e.target[4].value)
//     }
//     if(displayDays[5]){
//         if(e.target[5] === displayDays[displayDays.length-1])return;
//         console.log(e.target[5].value)
//     }
//     if(displayDays[6]){
//         if(e.target[6] === displayDays[displayDays.length-1])return;
//         console.log(e.target[6].value)
//     }
// }

//QUESTION
//I couldn't find a way to extract the value = user's choice from D-down menu such as 'Yoga'
// function handleDisplayDay(e) {
//     e.preventDefault();
//     const practiceContainer = document.querySelector('#practiceContainer');
//     const numberOfDays = document.getElementById("number-of-days").value;
//     const selectActivity = document.createElement("select");
//     const workPlan = {
//         dayChoice: numberOfDays,
//         practiceChoice: selectActivity.option, 
//         //targetArea,
//        //duration,
//     }
//     if(displayDays[0]) { 
//         if(e.target [0] === displayDays[displayDays.length-1])return;
//         const dayOneCard = document.createElement("div");
//         dayOneCard.textContent = `Day ${workPlan.dayChoice}: r${workPlan.practiceChoice}`
//         practiceContainer.append(dayOneCard)
// }
// }

function handleDisplayDay(e) {
        e.preventDefault();
        const practiceContainer = document.querySelector('#practiceContainer');
        if(displayDays[0]) { 
            if(e.target [0] === displayDays[displayDays.length-1])return;
            const dayOneCard = document.createElement("div");
            dayOneCard.textContent = `Day ${numberOfDays}: r${workPlan.practiceChoice}`
            practiceContainer.append(dayOneCard)
    }
    }



//manipulates affirmations box
//QUESTION When I apply css on it, I can't close the modal box. I couldn't put it in the middle of the screen as a second layer. 

// const quotes = document.getElementById("quotes");
// setTimeout(() => quotes.show(), 3000);
// document.getElementById("quotesButton").addEventListener("click", (e) => quotes.close())