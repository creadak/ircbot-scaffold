console.log('Starting up bot');
var bot = require('./app/bot');
bot.init();
require('./config/commands.js')(bot);