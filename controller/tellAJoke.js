const fetch = require('node-fetch');
const options = ['PROGRAMMING', 'MISC', 'DARK', 'PUN', 'SPOOKY', 'CHRISTMAS']

module.exports = async (msg, arg) => {
    let jokeType = arg.join(" ")
    if (jokeType === '') {
        jokeType = 'any'
        let url = `https://v2.jokeapi.dev/joke/${jokeType}?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single`
        let response = await fetch(url);
        let json = await response.json();
        msg.channel.send(json.joke);
    } else {
        if (options.includes(jokeType.toUpperCase())) {
            let url = `https://v2.jokeapi.dev/joke/${jokeType}?type=single`
            let response = await fetch(url);
            let json = await response.json();
            msg.channel.send(json.joke);
        } else {
            let url = `https://v2.jokeapi.dev/joke/$Any?type=single&contains=${jokeType}`
            let response = await fetch(url);
            let json = await response.json();
            if (json.error) {
                msg.channel.send('Enough jokes!!');
            } else {
                msg.channel.send(json.joke);
            }
        }
    }
}