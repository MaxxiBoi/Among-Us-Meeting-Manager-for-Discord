// First, import the bot from the bot.js file
var bot = require("./bot");

module.exports = function (id, ghostsArray, boolean) {
	if (boolean !== false) boolean = true;
	bot.getChannel(id).voiceMembers.map(function (member) {
		if (ghostsArray.includes(member.user)) {
			member.edit({
				mute: boolean,
			}, "This is a ghost.");
		} else {
			member.edit({
				mute: !boolean,
				deaf: !boolean
			}, "This is not a ghost.");
		}
		return member.id;
	});
}
