# Crypto Price Bot for Reddit

A simple bot to supply live Coin Market Cap prices to Reddit comments on request.


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

Stream comments from a specific subreddit for: !{TICKER} request and reply with the current USD value.

E.g
```
!ETH
```

## Built With

* [Snoowrap](https://github.com/not-an-aardvark/snoowrap) - Javascript wrapper for Reddit
* [Snoostorm](https://github.com/MayorMonty/Snoostorm) - An event based library for streaming from the Reddit API.
* [node-coinmarketcap](https://github.com/Aex12/node-coinmarketcap) - A node module to connect to CoinMarketCap API

