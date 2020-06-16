const config = require('config');
const botToken = config.get('telegramBot');

// ! need to add imp
process.env.NTBA_FIX_319 = 1;

const TelegramBot = require('node-telegram-bot-api');
const token = botToken;
const bot = new TelegramBot(token, { polling: true });

// *this holds the legeram bot init 
module.exports = bot;