// This is the file that Node JS should run
// To start the bot, run ./index.js in this directory

var bot = require("./bot.js"); // Import the bot from the bot.js file
var startmeet = require("./muteanddeafen.js"); // Import the function from the muteanddeafen.js file
var endmeet = function (id, ghostsArray) {startmeet(id, ghostsArray, false);} // startmeet with a false boolean ends the meeting, so use that for endmeet
var ghosts = new Array(); // Make the array here so it doesn't get reset every time bot.on runs

bot.on("messageCreate", function (msg) { // Event to be run every time a message is sent
	var ID = msg.member.voiceState.channelID; // Save the channel ID of the message sender
	if(msg.content === "!ping") { // This is from the get started code on the Eris Web site
		bot.createMessage(msg.channel.id, "Pong!");
	} else if (msg.content === "$startmeet") { // The command to start a meeting
		startmeet(ID, ghosts);
		console.log(ghosts); // This was here for debugging purposes
	} else if (msg.content === "$endmeet") { // The command to end a meeting
		endmeet(ID, ghosts);
	} else if (msg.content.startsWith("$addghost")) { // Add a ghost to the array
		ghosts = ghosts.concat(msg.mentions); // Combine the ghosts array with the array containing all users mentioned in the command
		console.log(ghosts); // This was here for debugging purposes
	}
});

bot.connect(); // Connect to server
