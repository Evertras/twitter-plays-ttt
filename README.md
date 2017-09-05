# Twitter Plays Tic Tac Toe

Using a bot Twitter account, we're going to make a program that plays
Tic Tac Toe using Twitter as its user interface.  Why?  Because we can.

## Learning Focus

Architecture.

Your code should be concise and easy to follow.  Once you get it
working, work as a team to figure out how to make it tighter.  Iterate.  Iterate
again.  Then iterate some more.  Discuss trade-offs, plans for potential growth,
and how your architecture can adapt.  Remember: *As simple as possible, but
no simpler.*

Questions to ask yourselves:

1. If someone new to the team came on, could they follow this code?
1. What changes are we anticipating needing to make for growth?
1. How DRY is this?
1. Are we leaving anything blobbed together that we could break up?  Should we?
1. Does everything follow the SRP (Single Responsibility Principle) as closely as practical?
1. Are we adding complexity for the sake of complexity?

Note that the original 'architecture' of throwing this into a single index.js
file is terrible.  It's just a bit of sample code to get you started, NOT
a long term plan.

## Before you start

Plan!  Draw out where things should go.  Be prepared to adapt that plan as you
move forward, but make sure you have a plan and that everyone is on the same page.

## Credentials/Account

The account has been set up as an application and all tokens/keys are available.
Ask me for them.  **DO NOT PUT THE KEYS INTO GITHUB.**  They're throwaway, but it's
a bad habit and you should never do it.  A scraping bot looking for keys can
find them and abuse them before you even try to use them yourself.  You can use
inquirer or some other method of injecting the keys into your program.  A config
file (*THAT IS NOT IN GITHUB*) would be fine.

## General Flow

Right now the only input the bot looks for is itself.  This means you'll need
to tweet as the bot.  Log into Twitter with the supplied credentials (ask me!)
and tweet with the bot while the code is running in order to receive commands.
Basically...

1. `node index.js` and leave it running on someone's machine
1. Open Twitter in a browser
1. Log in as the bot
1. Tweet something starting with ! as the bot: `!test`
1. See the tweet be registered in the running program and output to the console
1. Figure out how to make this play Tic Tac Toe!

## Bonus

After getting it to work with simple play commands, try adding a basic AI so that
someone can play against the bot.  How does this change your code?
