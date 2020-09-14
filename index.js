var bot = require("./bot.js");
var startmeet = require("./muteanddeafen.js");
var endmeet = function (id, ghostsArray) {startmeet(id, ghostsArray, false);}
var ghosts = new Array();

bot.on("messageCreate", function (msg) {
	var ID = msg.member.voiceState.channelID;
	if(msg.content === "!ping") {
		bot.createMessage(msg.channel.id, "Pong!");
	} else if (msg.content === "$startmeet") {
		startmeet(ID, ghosts);
		console.log(ghosts);
	} else if (msg.content === "$endmeet") {
		endmeet(ID, ghosts);
	} else if (msg.content.startsWith("$addghost")) {
		ghosts = ghosts.concat(msg.mentions);
		console.log(ghosts);
	}
});

bot.connect();
