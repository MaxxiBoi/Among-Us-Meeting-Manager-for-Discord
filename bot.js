// Just create the bot...
var Eris = require("eris");
var bot = new Eris(require("./classified.js").botToken);

// ...set up the ready event...
bot.on("ready", function () {
	console.log("Mute Manager is ready.");
});

// ...if you want to, you can set up other things here as well

// ... and export it.
module.exports = bot;
