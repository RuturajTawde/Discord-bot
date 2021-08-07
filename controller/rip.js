const gifs = [
  "https://tenor.com/view/spongebob-rip-sad-sponge-bob-stephen-hillenburg-crying-sponge-bob-squidward-gif-12966776",
  "https://tenor.com/view/stewie-family-guy-rip-sad-funeral-gif-13648662",
  "https://tenor.com/view/rip-coffin-black-ghana-celebrating-gif-16743302",
  "https://tenor.com/view/peter-parker-tobey-maguire-spiderman-tears-gif-13846595",
  "https://tenor.com/view/tears-sad-crying-cry-gif-3556278",
  "https://tenor.com/view/itachi-naruto-dead-anime-rain-gif-15934339",
  "https://tenor.com/view/dead-out-spongebob-bury-cartoon-gif-4878270",
];

module.exports = (msg, arg) => {
  let url = gifs[Math.floor(Math.random() * gifs.length)];
  msg.channel.send(url);
};
