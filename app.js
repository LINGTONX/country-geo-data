const _ = (string) => {
    return document.querySelector(string)
}

const Countries = _('#countries')
const inputs = document.getElementsByTagName('input')[0]
const Search = document.getElementById("Search")
const Region = document.getElementById("Region")
console.log(Region)


//fetching data

 window.addEventListener('DOMContentLoaded',()=>{
    fetch('https://restcountries.com/v2/all')
    .then(res=> res.json())
    .then(data => {
        RenderCard(data)
        inputs.addEventListener("keyup", (e)=>{   
            const SearchedItems = []
            data.map(el=> {
                el.name.toLowerCase().includes(e.target.value) ? SearchedItems.push(el):null    
            })
            RenderCard(SearchedItems)
        })

        Region.addEventListener('change', ({target}) => {
            const { value} = target 
            // console.log(e)
              const countryRegion = []
              data.map(el=>{
              (el.region.toLowerCase() === value.toLowerCase()) ? countryRegion.push(el):null

              })
              RenderCard(countryRegion)
        })


    console.log(data[0]);
    })
    
 })


 
const RenderCard = (array)=>{
    const arr = array.map((el)=>{
        return  `
        <a href="./country-details.html">
        <div  class="countryCard">
            <div class="flags">
            <img src="${el.flag}" alt="country flags">
            </div>
            <div class="details">
                <h3 title=${el.name}>${el.name.length > 14?el.name.slice(0,17) + '...':el.name}</h3>
                <h5>Population: <span> ${el.population} </span></h5>
                <h5>Region: <span>${el.region}</span></h5>
                <h5>Capital: <span>${el.capital}</span></h5>
            </div>
        </div>
        </a>
        `
    }).join("")
    Countries.innerHTML = arr 
}

