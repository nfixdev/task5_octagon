const telegrambot = require('node-telegram-bot-api');

const token = '6802319674:AAG3mBMojhnyMZfMZ940IAqo2cnCm7w90bI';

const bot = new telegrambot(token, {polling: true});

bot.onText(/\/help/, (msg)=>{
    const chatid = msg.chat.id;
    bot.sendMessage(chatid, 'help - возвращает список команд, с их описанием\nsite - отправляет в чат ссылку на сайт октагона\ncreator - отправляет в чат ваше ФИО');
});

bot.onText(/\/site/, (msg)=>{
    const chatid = msg.chat.id;
    bot.sendMessage(chatid, 'https://students.forus.ru/');
});

bot.onText(/\/creator/, (msg)=>{
    const chatid = msg.chat.id;
    bot.sendMessage(chatid, 'Тожиев Роман Шамсиддинович');
});