'use strict';

var Twitter = require('twitter');

if (!process.env.TWITTER_CONSUMER_KEY) {
	console.log('source auth.sh');
	process.exit(1);
}

var twitterClient = new Twitter({
	consumer_key: process.env.TWITTER_CONSUMER_KEY,
	consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
	access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
	access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

function tweetBoard() {
	var board = '';

	// TODO: Draw the board state... you need to keep the dashes for empty spots!
	// Replace with X and O where appropriate otherwise.  Note that you need
	// to update the game # and turn # or twitter whines (rightfully) about
	// duplicate statuses.
	board += 'Game 1 Turn 1: X\n';
	board += '- | - | -\n';
	board += '---------\n';
	board += '- | - | -\n';
	board += '---------\n';
	board += '- | - | -';

	twitterClient.post('statuses/update', { status: board }, function(err, tweet, res) {
		if (err) {
			console.log('ERROR TWEETING BOARD!');
			return console.log(err);
		}
	});
}

// This will stream all data for the user, which is our bot... so right now
// we can only control the game from the bot itself, but that's fine.  Any
// tweets by the bot will be parsed in the 'data' event below.  To play, you'll
// need to log into Twitter as the bot and tweet manually for now.
var stream = twitterClient.stream('user');

stream.on('data', function(event) {
	// Make sure we have an event and that event is a command.  All commands
	// will start with '!' to indicate that they are in fact a command,
	// so we avoid going into weird infinite feedback loops from self-tweets.
	if (event && event.text && event.text.indexOf('!') === 0) {
		console.log('Got a command!');
		console.log(event.text);

		// TODO: Parse command and update the board.  You'll need to come up
		// with some command syntax.  Maybe '!play 3 3' to play in the bottom
		// right corner?  A '!help' command that tweets back this syntax would
		// be great too!

		// If the game is done, announce the winner with fanfare!

		// Either way, print the board state
		tweetBoard();
	}
});

stream.on('error', function(err) {
	console.log('ERROR');
	console.log(err);
});

tweetBoard();
