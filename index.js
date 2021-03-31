const config = require("./config.json"); 
const Discord = require("discord.js"),
client = new Discord.Client();

const { Player } = require("discord-player");
const player = new Player(client);
client.player = player;

client.on("ready", () => {
    console.log("Bot em funcionamento!");//mensagem de ativaçao do bot
});

