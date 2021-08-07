module.exports = (msg, arg) => {
  let subreddit = arg.join(" ");
  msg.channel.send(`https://www.reddit.com/r/${subreddit}/`);
};
