const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "randomnum",
  aliases: ["rm", "numeroaleatorio", "na"],
  category: "Fun",
  description: "By default the bot chooses a random number between 1 and 10. Command to choose the numbers: ``+randomnum <minimum> <maximum>``",
  run: async (client, message, args) => {
  
if(!args[0]) {
  var result = Math.floor(Math.random() * (10 - 1) + 1);
  return message.channel.send('A random number between 1 and 10 is: `'+ result +'`'); 
}
if(!args[1]) return message.channel.send('Error! Missing arguments. ``+randomnum <minimum> <maximum>``');

  var num1 = Number(args[0]);
  var num2 = Number(args[1]);
  
  if(num1 > num2)return message.channel.send('The minimum number must be less than the maximum')
  
  var result = Math.floor(Math.random() * (num2 - num1) + num1);
  
  message.channel.send('A random number between ' + num1 + ' and ' + num2 + ' is: ``' + result + '``');
  }
  }
