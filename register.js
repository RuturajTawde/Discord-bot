// all the list of command and the logic. (will try to add some dir check)
const dotaPlayer = require('./controller/dotaPlayer');
const test = require('./controller/test')
const dotaHero = require('./controller/dotaHero')
const dotaHeroCounter = require('./controller/dotaHeroCounter')
const sparta = require('./controller/sparta')
const joeJoke = require('./controller/joeJoke')
const respect = require('./controller/respect')
const tellAJoke = require('./controller/tellAJoke')
const tableflip = require('./controller/tableflip')
const rip = require('./controller/rip')
const askque = require('./controller/askque')
const subreddit = require('./controller/subreddit')
const givepercent = require('./controller/givepercent')

// object of key name and the function
const allCommands = {
    test,
    dotaPlayer,
    dotaHero,
    dotaHeroCounter,
    sparta,
    joeJoke,
    respect,
    tellAJoke,
    tableflip,
    rip,
    askque,
    subreddit,
    givepercent,
}

// all the command starts with '!' and some other functions are also present here
module.exports = function (msg) {
    let tokens = msg.content.split(" ");
    let command = tokens.shift();
    switch (command.charAt(0)) {
        case '!':
            command = command.substring(1)
            if (command in allCommands) {
                allCommands[command](msg, tokens)
            }
            break;
        case 'f':
        case 'F':
            command = command.substring(1)
            if (command === '') {
                allCommands['respect'](msg, tokens)
            }
            break;
        default:
            if (msg.content === '<@&815498019717644318>') {
                allCommands['dotaPlayer'](msg, tokens)
            }
            if (msg.content.toUpperCase().startsWith('THIS IS')) {
                allCommands['sparta'](msg, tokens)
            }
            if (msg.content.endsWith('?')) {
                allCommands['joeJoke'](msg, tokens)
            }
            if (msg.content.toUpperCase() === 'RIP') {
                allCommands['rip'](msg, tokens)
            }
            break;
    }
}