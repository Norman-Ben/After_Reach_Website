fetch('http://localhost:1337/api/tourdate')
.then(response => response.json())
.then(data => console.log(data));
