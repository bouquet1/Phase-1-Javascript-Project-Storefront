//console.log("test"); -//works
fetch("http://localhost:3000/practices")
    .then(res => res.json())
    //.then(json => console.log(json)) // works
    .then(practices => {
        //create a container for the practices ul
        const practiceList = document.querySelector("ul#practicesList");
        console.log(practiceList); //works
        //loop through the practices (forEach meets 1 requirement)
        practices.forEach((practice) => {
            //TODO LIST - twe have itle, image, duration, description, facts to loop through
            //create an element to hold the title // h2 maybe
            //create an element to hold img - add photos to db.json image property
            //create an element to hold duration
            //create an element to hold description
            //create an element to hold facts
            //create <li> item to hold the elements
            //append elements to the list items
            //append list items to ul container
        })
    })


