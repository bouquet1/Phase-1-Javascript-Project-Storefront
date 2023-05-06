console.log("test");
fetch("http://localhost:3000/dailyQuickies").then(res => res.json()).then(json => console.log(json))