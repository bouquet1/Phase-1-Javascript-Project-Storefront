//console.log("test");
fetch("http://localhost:3000/dailyQuickies")
    .then(res => res.json())
    //.then(json => console.log(json))
    .then(practices => {
        //have the container for the practices
        const practiceList = document.querySelector("ul#practicesList");
        console.log(practiceList);
    })


