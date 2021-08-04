module.exports = (msg, arg) => {
    if (msg.author.username != 'Dota2') {
        if (msg.content.toUpperCase().includes('JOE')) {
            msg.channel.send("Joe mama!!");
        } else {
            msg.reply("Why don't you ask Joe??");
        }
    }
}