var CoinMarketCap = require(".")

var options = {
	events: true,
	refresh: 5, // Refresh time in seconds (Default: 60)
	convert: "EUR" // Convert price to different currencies. (Default USD)
}
var coinmarketcap = new CoinMarketCap(options); 

// Put event for price greater or equal than X
coinmarketcap.onGreater("BTC", 3000, (coin, event) => {
	console.log("BTC price is greater than "+event.price+" of your defined currency");
});