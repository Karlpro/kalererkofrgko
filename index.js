
const TelegramBot = require('node-telegram-bot-api');
const token = '758928819:AAHzP3HI-0Z9q1fxB3gO377OTFNVFpgwdcs';
const bot = new TelegramBot(token, {polling: true});
//const url = 'http://api.openweathermap.org/data/2.5/find?q=Kiev&type=like&APPID=bb7bb415a2bc3847616afb5a120f94a8';

bot.onText(/\/sayhi/, (msg, match) => {


     chatId = msg.chat.id;
    
     for(i=0;i<10000;i++){
      bot.sendMessage(chatId,"h");

}

});
