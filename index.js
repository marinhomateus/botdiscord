const config = require("./config.json");
const Discord = require("discord.js"),
  client = new Discord.Client();

const { Player } = require("discord-player");
const player = new Player(client);
client.player = player;

client.on("ready", () => {
  console.log("Bot em funcionamento!"); //mensagem de ativaçao do bot
});

client.on("message", async (message) => {
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();

  if (comando === "your_command")
    //for the personalized command you can use this pattern
    client.player.play(message, "link_you_want_to_execute");

  if (comando === "get_you")
    //Example     ?get you        will play the linked video song
    client.player.play(message, "https://www.youtube.com/watch?v=uQFVqltOXRg");

  if (comando === "play") client.player.play(message, args[0]);

  //EXAMPLE           ?play Sacrifice         Will play the first 'Sacrifice' result found on youtube
});

client.login(config.token); //log the bot by a token
