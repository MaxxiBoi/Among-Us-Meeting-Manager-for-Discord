// First, import the bot from the bot.js file
var bot = require("./bot");

// Export the function
module.exports = function (id, ghostsArray, boolean) { // id is ID of voice channel, ghostsArray is an array containing the user objects of the ghosts
	if (boolean !== false) boolean = true; // If it doesn't say to explicitly end the meeting, start it
	bot.getChannel(id).voiceMembers.map(function (member) { // Get the VoiceChannel that they're in and run the function on all Member objects
		if (ghostsArray.includes(member.user)) { // Check to see if Member is a ghost
			member.edit({
				mute: boolean, // Ghosts are muted during meetings and unmuted when they end
			}, "This is a ghost.");
		} else {
			member.edit({
				mute: !boolean, // The living are unmuted during meetings and muted when they end
				deaf: !boolean // The living are undeafened during meetings and deafened when they end
			}, "This is not a ghost.");
		}
		return member.id; // I used this for debugging
	});
}
