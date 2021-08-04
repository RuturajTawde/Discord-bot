module.exports = (msg, arg) => {
    if (msg.author.username != 'Dota2') {
        if (msg.content.toUpperCase().includes('JOE')) {
            if(Math.floor(Math.random()*10) < 3){
                msg.channel.send("Joe mama!!");
            }
        } else {
            msg.reply("Why don't you ask Joe??");
        }
    }
}