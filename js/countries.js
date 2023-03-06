

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
            <h4> Name : ${country.name.official } </h4>
            <p> Capital : ${country.capital? country.capital[0] : 'No Capital'}</p>
            <hr>
        `;
        containeSection.appendChild(newDiv);
        
    });
}

showCountries();