class CryptoAPI{
    



    async getCryptoCurrencyList(){
        const url = await fetch('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=100&tsym=USD&api_key=3d97da949d3b2c7c311ae57879b7a16949f9522f6ef682bc80b23c733db38135');

        // Return this as JSON.
        const cryptoCurrencies = await url.json();
        return{
            cryptoCurrencies
        }
    }

}