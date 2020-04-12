// Initializing the classes.

const cryptoAPI = new CryptoAPI();
const ui = new UI();


// Creating variables.
const form = document.getElementById('form');


// Add event listener.
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Read currency.
    const currency = document.getElementById('currency').value;
    // Read cryptoCurrency/
    const cryptoCurrency = document.getElementById('cryptocurrency').value;

    // Validate the selects.
    if(currency === "" || cryptoCurrency === ""){
        // display error.
        ui.printMessage('All the fields are mandatory', 'deep-orange darken-4 card-panel');
    }
    else{
        console.log(currency + " : " + cryptoCurrency);
    }

})