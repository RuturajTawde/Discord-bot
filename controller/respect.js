module.exports = (msg, arg) => {
    if (msg.author.username != 'Dota2' && msg.author.username != 'Dank Memer') {
        msg.channel.send('f');
    }
}