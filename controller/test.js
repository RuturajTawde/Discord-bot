module.exports = (msg, arg) => {
  msg.channel.send("Beep Boop !! The bot is Working now 🤖");
  msg.channel.send({
    embed: {
      color: 0x0099ff,
      title: "Dota2",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      description:
        "This is a practice bot to learn Discord.js and have fun with friends on my Discord server. ",
      thumbnail: {
        url: "https://i.pinimg.com/originals/27/ff/39/27ff3902c1363a776c9db6ee6f7d76d8.jpg",
      },
      fields: [
        {
          name: "You can use the following commands to interact with the Bot",
          value: "\u200b",
        },
        {
          name: "!askque <question>",
          value: "You can ask a yes/no question to bot.",
          inline: false,
        },
        {
          name: "!dotahero <Hero_Name>",
          value: "It will redirect you to dota wiki page of mentioned hero.",
          inline: false,
        },
        {
          name: "!dotaherocounter <Hero_Name>",
          value:
            "It will direct you to dota wiki page of mentioned hero's counter.",
          inline: false,
        },
        {
          name: "!givepercent <ask any percent question>",
          value: "It will tell the probability",
          inline: false,
        },
        {
          name: "!subreddit <subreddit>",
          value: "It will redirect you to mentioned subreddit page",
          inline: false,
        },
        {
          name: "!tableflip",
          value: "Flip a table...",
          inline: false,
        },
        {
          name: "!tellajoke <Type of Joke>",
          value: "It will respond with a joke.",
          inline: false,
        },
        {
          name: "and many more command triggering reactions",
          value: "\u200b",
          inline: false,
        },
      ],
      image: {
        url: "https://i.pinimg.com/originals/e4/c9/2f/e4c92f412f22002efe8679693ce201b4.gif",
      },
      timestamp: new Date(),
      footer: {
        text: "github.com/RuturajTawde",
        icon_url: "https://octodex.github.com/images/daftpunktocat-thomas.gif",
      },
    },
  });
};
