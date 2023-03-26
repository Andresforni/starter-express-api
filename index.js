const express = require('express');
const app = express();

let text = "HELLO TRADER";
let priceActual = 0;


//const request = require('request');


app.all('/', (req, res) => {
    console.log("Just got a request!");
    res.send(text);
});
app.listen(process.env.PORT || 3000);

const TelegramBot = require('./telegram-bot.js');

const token = '5855223410:AAHfIEFCbE-eQ4KNmrBlD0P-yUR1NAMH5Uc'; //process.env['TOKEN_TELEGRAM_API']; 


function exampleCallback(message) {
    if (message.action == '/start') {
        return 'Hello trader!';
    }
    if (message.action == '/hello') {
        if (message.text.split(' ').length == 2) {
            return 'Hello, ' + message.text.split(' ')[1];
        } else {
            return 'Hello, Noname';
        }
    }

    if (message.action == '/btc') {

        return 'BTC: 22';
    }


}

const exampleBot = new TelegramBot(token, exampleCallback);

exampleBot.start();


