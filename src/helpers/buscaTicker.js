//OBJETO CON ARRAYS
let ArrayTicker = {
    "Amazon" : ["AMZN", "EEUU"],
    "American Express" : [ "AXP","EEUU"],
    "Apple" : ["AAPL", "EEUU"],
    "Boeing" : [ "BA","EEUU"],
    "Caterpillar" : [ "CAT", "EEUU"],
    "Chevron" : [ "CVX", "EEUU"],
    "Cisco Systems" : [ "CSCO", "EEUU"],
    "Coca-Cola": [ "KO", "EEUU"],
    "IBM" : [ "IBM", "EEUU"],
    "Intel" : [ "INTC", "EEUU"],
    "Johnson & Johnson" : [ "JNJ" , "EEUU"],
    "JP Morgan Chase" : [ "JPM", "EEUU"],
    "MCDonalds" : [ "MCD", "EEUU"],
    "Merck" : [ "MRK", "EEUU"],
    "Microsoft" : [ "MSFT", "EEUU"],
    "Netflix" : ["NFLX", "EEUU"],
    "Nike" : [ "NKE", "EEUU"],
    "Procter & Gamble" : [ "PG", "EEUU"],
    "Salesforce.com" : [ "CRM", "EEUU"],
    "Tesla" : ["TSLA", "EEUU"],
    "UnitedHealth" : [ "UNH", "EEUU"],
    "Verizon" : [ "VZ", "EEUU"],
    "Visa" : [ "V", "EEUU"],
    "Walgreens Boots" : [ "WBA", "EEUU"],
    "Wal-Mart" : [ "WMT", "EEUU"],
    "Walt Disney" : ["DIS", "EEUU"],
    "3M" : ["MMM", "EEUU"],
}

const buscaTicker = (nombreValor) => {
    console.log(nombreValor);
    const TickerEncontrado = ArrayTicker[nombreValor];
    console.log(TickerEncontrado);
    return TickerEncontrado;
};

export {buscaTicker};