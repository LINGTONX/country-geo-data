

let data = []
//fetching data

fetch('https://restcountries.com/v2/all')
.then(res=> res.json())
.then(data => {
    data = [...data]
    console.log(data);
    
})