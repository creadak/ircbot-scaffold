var BotCommands = require('../app/controllers/bot_commands');

module.exports = function(app) {
	var botCommands = new BotCommands();

	// Example command
	// app.cmd('dbus', '', botCommands.dublinBusInfo);
};