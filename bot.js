require('dotenv').config();
const Snoowrap      = require('snoowrap');
const Snoostorm     = require('snoostorm');
const CoinMarketCap = require('node-coinmarketcap');
const coinmarketcap = new CoinMarketCap();


// Create requester to authenticate Reddit client from .env file
const r = new Snoowrap({
    userAgent:      'Crypto Price Bot',
    clientId:       process.env.CLIENT_ID,
    clientSecret:   process.env.CLIENT_SECRET,
    username:       process.env.REDDIT_USER,
    password:       process.env.REDDIT_PASS,
});

// Configure options for Reddit
const stream = {
    subreddit: 'testabot', //<-subreddit to test bots
    results: 100,
};

// Create live comment stream
const client = new Snoostorm(r);
const comments = client.CommentStream(stream);

//Scan comments for request then replies
comments.on('comment', (comment) => {
    //Scans text for !{TICKER} request
    const text = `${comment.body}`;
    const request = /![A-Z]+(?=[^\w]|$)/g;

    //If tickers found...
    if(text.match(request)){
        // Removes '!' to process tickers
        const tickers = (text.match(request).map((val)=>val.slice(1).trim(1)));
        //Set reply string
        let reply = '';

        //Pass tickers to CoinMarketCap for price
        coinmarketcap.multi(coins => {
            for(var i = 0; i < tickers.length; i++){ 
            
                //If ticker is valid... 
                if(coins.get(tickers[i]) != null){  
                    //Push price to reply
                    reply += (
                    tickers[i] + " currently: $" + 
                    coins.get(tickers[i]).price_usd + 
                    "\n" + "\n"
                    ) 
                }
            };

        //Comment reply in Reddit format
        if(reply != ''){
            comment.reply(
                reply +
                "\n" + "\n" +
                "***" +
                "\n" + "\n" +
                "^(Live prices from Coin Market Cap)"
            )

        //Log bot replied
        console.log('Replied to ' + comment.author['name']); 
        };     
        });
    };
});
//Log bot running 
console.log('Bot running...');