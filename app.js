const _ = (string) => {
    return document.querySelector(string)
}

const Countries = _('#countries')
const inputs = document.getElementsByTagName('input')[0]
const Search = document.getElementById("Search")
const CountryCards = document.querySelectorAll('.countryCard')
const Region = document.getElementById("Region")


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
//fetching data

 window.addEventListener('DOMContentLoaded',()=>{


    fetch('https://restcountries.com/v2/all')
    .then(res=> res.json())
    .then(data => {
        RenderCard(data)
        Countries.addEventListener('click', (e)=>{
            if([...e.target.parentElement.classList].includes('details') || [...e.target.parentElement.classList].includes('flags')){
                localStorage.setItem('country',e.target.parentElement.parentElement.id)
            }
        })
        inputs.addEventListener("keyup",  ({target}) => {
            const { value} = target   
            const searchVal = value.toLowerCase().trim()
            const SearchedItems = []
            data.map(el=> {
                el.name.toLowerCase().trim().includes(searchVal) ? SearchedItems.push(el):null    
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

 const handleClick = (e)=>{
   console.log(e, 'yes')
 }

 
const RenderCard = (array)=>{
    const arr = array.map((el)=>{
        return  `
        <a href="country-details.html">
  
        <div  class="countryCard" id=${el.name} >
            <span class="flags">
            <img src="${el.flag}" alt="country flags">
            </span>
            <span class="details">
                <h3 title=${el.name}>${el.name.length > 14?el.name.slice(0,17) + '...':el.name}</h3>
                <h5>Population: <span> ${numberWithCommas(el.population)} </span></h5>
                <h5>Region: <span>${el.region}</span></h5>
                <h5>Capital: <span>${el.capital}</span></h5>
            </span>
        </div>
        </a>
        `
    }).join("")
    Countries.innerHTML = arr 

}


function toggle(){
    document.body.classList.add('darkMode')
}
