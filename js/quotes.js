
const loadQuote = () =>{
    fetch("https://api.kanye.rest/") // query parameter / search string.
    .then(response => response.json())
    .then(data => displayQuote(data));
}

const displayQuote = (quote) => {
    const blockQuote = document.getElementById('quote');
    // console.log(quote);
    blockQuote.innerText = quote.quote;
}