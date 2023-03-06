

const showCountries = () =>{
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => displayCountry(data))
}


const displayCountry= countries =>{
    // for(const country of countries){
    //     console.log(country);
    // }
    // foreach loog can't return ;
    
    const containeSection = document.getElementById('countries-container');
    countries.forEach(country => {
        console.log(country);
        const newDiv = document.createElement('div');
        newDiv.classList.add('design');
        newDiv.innerHTML = `
            <h4> Name : ${country.name.common } </h4>
            <p> Capital : ${country.capital? country.capital[0] : 'No Capital'}</p>
            
            <button onclick="countryDetail('${country.cca2}')">Details</button>
           
        `;
        containeSection.appendChild(newDiv);
         
    });
}

const countryDetail = (code) =>{
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    fetch(url)
    .then(res =>res.json())
    .then(data => loadCountryDetails(data[0]))
}


const loadCountryDetails = country =>{
    const countryDetail = document.getElementById('country-detail');
    countryDetail.innerHTML = `
        <h2>Details: ${country.name.common}</h2>
        <img src="${country.flags.png}">
    `
}

showCountries();