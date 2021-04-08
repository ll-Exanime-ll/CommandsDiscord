const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "dice",
  aliases: ["dado"],
  category: "Fun",
  description: "Roll the dice randomly",
  run: async (client, message, args) => {
  
let link = [
    'https://cdn.glitch.com/7cee5634-e2fb-415f-b3dd-3679a885efd9%2Fdice-1.png?v=1617812282052',
    'https://cdn.glitch.com/7cee5634-e2fb-415f-b3dd-3679a885efd9%2Fdice-2.png?v=1617812282052',
    'https://cdn.glitch.com/7cee5634-e2fb-415f-b3dd-3679a885efd9%2Fdice-3.png?v=1617812282052',
    'https://cdn.glitch.com/7cee5634-e2fb-415f-b3dd-3679a885efd9%2Fdice-4.png?v=1617812282052',
    'https://cdn.glitch.com/7cee5634-e2fb-415f-b3dd-3679a885efd9%2Fdice-5.png?v=1617812282052',
    'https://cdn.glitch.com/7cee5634-e2fb-415f-b3dd-3679a885efd9%2Fdice-6.png?v=1617812282052'
];
var dice = link[Math.floor(Math.random() * link.length)];
const embed = new Discord.MessageEmbed()
  .setTitle(`${message.author.username} has rolled the dice.`)
  .setDescription('The die has fallen on:')
  .setImage(dice)
  .setColor('GREEN');
  
  message.channel.send(embed);
  }
  }
