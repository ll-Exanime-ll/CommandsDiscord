const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "snipe",
  category: "Moderation",
  description: "View the last deleted message",
  run: async (client, message, args) => {
  
const channel = message.mentions.channels.first() || message.channel;

const msg = client.snipes.get(channel.id)

if(!msg){
  message.channel.send("No message has been deleted")
} else {
  const embed = new Discord.MessageEmbed()
  
  .setTitle("Snipe")
  .setAuthor(`Written message from ${msg.delete.tag}`, msg.delete.displayAvatarURL())
  .addField("Canal", `<#${msg.canal.id}>`)
  .setDescription(msg.content)
  .setColor("RED")
  
  message.channel.send(embed)
  }
}
}
