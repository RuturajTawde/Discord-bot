module.exports = (msg, arg) => {
    let dadName = msg.content.toLowerCase().replace('this is', '').trim();
    msg.channel.send(`No no no... not ${dadName}, THIS... IS... DOTA!!!`);
}