const nationsDetail = document.getElementById('nations-details')

window.addEventListener('DOMContentLoaded',()=>{


    fetch('https://restcountries.com/v2/all')
    .then(res=> res.json())
    .then(data => {
        let countryName = localStorage.getItem('country')
        let filteredName = data.filter((el)=> el.name === countryName)
        console.log(filteredName)
        RenderCard(filteredName)
     
      
    })
    
 })


  
const RenderCard = (array)=>{
    const arr = array.map((el)=>{
        return  `
        <div class="lg-flag">
        <img src=${el.flag} alt=${el.name}>
    </div>

    <div class="nationsInfo">
        <div class="align"><h2>${el.name}</h2></div>
        <div class="info-content">
            <div class="info-details1 details ">
                <h5>Native Name: <span>${el.nativeName}</span></h5>
                <h5>Population: <span>${el.population}</span></h5>
                <h5>Region: <span>${el.region}</span></h5>
                <h5>Sub Region: <span>${el.subregion}</span></h5>
                <h5>Capital: <span>${el.capital}</span></h5>
            </div>
            <div class="info-details2 details">
                <h5>Top Level Domain: ${el.topLevelDomain.map(elem=>{
                     return `<span>${elem}</span>`
                })}</h5>
                <h5>Currencies: ${el.currencies.map(elem=>{
                    return `<span>${elem.name}</span>`
                })}</h5>
                <h5>Languages: ${el.languages.map(elem=>{
                    return `<span>${elem.name}</span>`
                })}</h5>
            </div>
        </div>

        <div class="borders">
            <div class="align"><h3>Border Countries:</h3></div>
            <div class="borderCountry">
                ${
                    el.borders.map(elem=>{
                    return `<button>${elem}</button>`
                }).join('')}
            </div>
        </div>
    </div>
        `
    }).join("")
    nationsDetail.innerHTML = arr 

}