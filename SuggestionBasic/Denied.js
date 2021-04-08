const Discord = require("discord.js");
const { Client, Collection } = require("discord.js");
const client = new Client({
  disableEveryone: true
});

module.exports = {
  name: "sd",
  category: "Suggestions",
  description: "Suggestions denied",
  run: async (client, message, args) => {
    if (message.author.id !== "id") return; //This will only respond to the Discord profile of that ID (delete if you want everyone to be able to use this command).
    message.delete();
    let user = message.mentions.users.first() || message.author;
    let canal = client.channels.resolve('id') //If you want the message to be sent to a specific channel.
    const embedDatos = new Discord.MessageEmbed() 
    .setTitle("Suggestions denied")
    .setDescription("Suggestion message")
    .setThumbnail(user.displayAvatarURL())
    .setFooter("From " + user.tag) //It is important to name the owner of the suggestion, otherwise it will come out that the suggestion is yours.
    .setColor("FF0000")
    .setTimestamp();
canal.send({ embed: embedDatos });
}};
