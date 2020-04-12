class UI{
    constructor(){
        this.init();
    }

    init(){
        this.printCryptoCurrencies();
    }

    // Prints the options for the list in form.
    printCryptoCurrencies(){
        cryptoAPI.getCryptoCurrencyList()
            .then(data => {
                const cryptoCurrencies = data.cryptoCurrencies.Data;
                console.log(cryptoCurrencies);
                
                // Build the <select> from REST API.
                const select = document.getElementById('cryptocurrency');

                cryptoCurrencies.forEach(currency => {
                    // Create a new option.
                    const option = document.createElement('option');
                    option.value = currency.CoinInfo.Name;
                    option.appendChild(document.createTextNode(currency.CoinInfo.FullName));
                    select.appendChild(option);
                });
            })
    }
}