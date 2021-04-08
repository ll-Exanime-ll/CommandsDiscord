const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "gay",
  aliases: ["gey"],
  category: "Fun",
  description: "Random percentage of gay",
  run: async (client, message, args) => {
  
let percentage = ["0%", "10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%"]

  var gay = percentage[Math.floor(Math.random() * percentage.length)]
    let userm = message.mentions.users.first()
  if (!userm) return message.reply("**Mention who to measure the Gay percentage** :rainbow_flag:")
    const embed = new Discord.MessageEmbed()
      .addField(`Gay percentage of ${userm.username}`, `Is **${gay}** gay :rainbow_flag:`)
      .setColor("PURPLE")
      .setImage(`${userm.avatarURL()}`);
      message.channel.send(embed)
}}
