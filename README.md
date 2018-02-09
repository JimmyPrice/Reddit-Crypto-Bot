# Crypto Price Bot for Reddit

A simple bot that returns current cryptocurrency prices from Coin Market Cap, to Reddit comments on request.


### Prerequisites & dependencies

Node

NPM:
```
Snoowrap
Snoostorm
node-coinmarketcap
```

### Set up
Add Reddit client details to .env file

### Reddit usage

Stream comments from a specific subreddit and scan for !{TICKER} request, then reply with the current USD value.

E.G
```
I would like the price of !ETH as well as !BTC
```

## Built With

* [Snoowrap](https://github.com/not-an-aardvark/snoowrap) - Javascript wrapper for Reddit
* [Snoostorm](https://github.com/MayorMonty/Snoostorm) - An event based library for streaming from the Reddit API.
* [node-coinmarketcap](https://github.com/Aex12/node-coinmarketcap) - A node module to connect to CoinMarketCap API

