const config = require("./config.json"); 
const Discord = require("discord.js"),
client = new Discord.Client();

const { Player } = require("discord-player");
const player = new Player(client);
client.player = player;