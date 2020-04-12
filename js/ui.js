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

    // Print a message.
    printMessage(message, className){
        const div = document.createElement('div');

        // add the classes.
        div.className = className;

        // add the message.
        div.appendChild(document.createTextNode(message));

        const messageDiv = document.querySelector('.messages');
        messageDiv.appendChild(div);

        // Remove the messaage.
        setTimeout(() => {
            document.querySelector('.messages div').remove();
        }, 3000)
    }

    // Prints the result of evaluation.
    displayResult(result, currency, cryptoCurrency){

        // Removing previous result.
        const prevResult = document.querySelector('#result > div');
        if(prevResult){
            prevResult.remove();
        }

        let HTMLTemplate = '';
        HTMLTemplate += `
            <div class="card cyan darken-3">
                <div class="card-content white-text">
                    <span class="card-title">Result</span>
                    <p>The price of ${cryptoCurrency} in ${currency} : ${result[cryptoCurrency][currency].PRICE}</p>
                    <p>% change of ${cryptoCurrency} in last 1 hour : ${result[cryptoCurrency][currency].CHANGEPCTHOUR}%</p>
                    <p>% change of ${cryptoCurrency} in last 24 hours : ${result[cryptoCurrency][currency].CHANGEPCTDAY}%</p>
                    <p>Highest ${cryptoCurrency} reached in last 24 hours : ${result[cryptoCurrency][currency].HIGH24HOUR}</p>
                    <p>Lowest ${cryptoCurrency} dropped in last 24 hours : ${result[cryptoCurrency][currency].LOW24HOUR}</p>
                </div>
            </div>
        `;

        // Use the spinner.
        this.showSpinner();

        setTimeout(() => {
            const divResult = document.querySelector('#result');
            divResult.innerHTML = HTMLTemplate;

            // Hide the spinner.
            document.querySelector('.spinner img').remove();
        },3000)
    }

    // Show the spinner.
    showSpinner(){
        const spinner = document.createElement('img');
        spinner.src = 'img/spinner.gif';
        document.querySelector('.spinner').appendChild(spinner);
    }
}